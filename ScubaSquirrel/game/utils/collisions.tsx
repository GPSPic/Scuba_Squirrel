import Matter, { World } from "matter-js";
import Cave from "../gameObjects/Cave";
import { Dimensions } from "react-native";


const collidedPairs = new Set();

const handleCollision = (engine: any, dispatch: any) => {
    // set interval to process collisions to 100ms and declare value for previous collision time variable
    const throttleInterval: number = 100; 
    let lastProcessedCollisionTime: number = 0;
    const screenWidth: number = Dimensions.get('window').width;

    Matter.Events.on(engine, 'collisionStart', (event) => {
        const collisionPairs = event.pairs;
        const currentTime = Date.now();

        
        for (const collisionPair of collisionPairs) {
            const bodyA = collisionPair.bodyA;
            const bodyB = collisionPair.bodyB;
            const pairId = `${collisionPair.id}`;
            const collisionNormal = collisionPair.collision.normal;
            const collisionX = collisionNormal.x;
            const collisionY = collisionNormal.y;

            let puffaFish;
            let squirrel;
            let acorn;
            let cave;
            let kelp;
            let jelly;
            let crab;
            // let wall;
            // let obstacle;
            
            if (currentTime - lastProcessedCollisionTime >= throttleInterval) {
                
                if (
                    (bodyA.label === "PuffaFish" && bodyB.label === "Squirrel") ||
                    (bodyA.label === "Squirrel" && bodyB.label === "PuffaFish")
                    ) {
                        if (bodyA.label === "PuffaFish") {
                            puffaFish = bodyA;
                            squirrel = bodyB;
                            Matter.Body.setVelocity(squirrel, { x: -collisionX, y: -collisionY });
                        } else {
                            squirrel = bodyA;
                            puffaFish = bodyB;
                            Matter.Body.setVelocity(squirrel, { x: collisionX, y: collisionY });
                        }
                        
                        
                        if ((puffaFish.bounds.max.x - puffaFish.bounds.min.x) < screenWidth/12){
                            Matter.Body.scale(puffaFish, 1.005, 1.005);
                            // After x ticks descale the fish
                        }
                    }
                    
                    if (
                        (bodyA.label === "Acorn" && bodyB.label === "Squirrel") ||
                        (bodyA.label === "Squirrel" && bodyB.label === "Acorn")
                        ) {
                            if (collidedPairs.has(pairId)) {
                                        continue; 
                                    }
                            if (bodyA.label === "Acorn") {
                                acorn = bodyA;
                                squirrel = bodyB;
                            } else {
                                squirrel = bodyA;
                                acorn = bodyB;
                            }
                            Matter.Composite.remove(engine.world, acorn)
                            Matter.Body.setPosition(acorn, {x:500 , y:500})
                            collidedPairs.add(pairId);
                            dispatch({ type: 'collect_acorn' });
                    }

                    if (
                        (bodyA.label === "Cave" && bodyB.label === "Squirrel") ||
                        (bodyA.label === "Squirrel" && bodyB.label === "Cave")
                        ) {
                            if (collidedPairs.has(pairId)) {
                                        continue; 
                                    }
                            if (bodyA.label === "Cave") {
                                cave = bodyA;
                                squirrel = bodyB;
                            } else {
                                squirrel = bodyA;
                                cave = bodyB;
                            }
                            collidedPairs.add(pairId);
                            dispatch({ type: 'win_con' });
                     }

                    if (
                        (bodyA.label === "Squirrel" && bodyB.label === "JellyFish") ||
                        (bodyA.label === "JellyFish" && bodyB.label === "Squirrel") ||
                        (bodyA.label === "Squirrel" && bodyB.label === "Crab") ||
                        (bodyA.label === "Crab" && bodyB.label === "Squirrel")
                        ) {
                            if (collidedPairs.has(pairId)) {
                                continue; 
                            }
                            collidedPairs.add(pairId);
                            dispatch({ type: 'game_over' });
                    }

                    if (
                        (bodyA.label === "Squirrel" && bodyB.label === "Kelp") ||
                        (bodyA.label === "Kelp" && bodyB.label === "Squirrel")
                        ) {
            
                            if (bodyA.label === "Kelp") {
                                kelp = bodyA;
                                squirrel = bodyB;
                            } else {
                                squirrel = bodyA;
                                kelp = bodyB;
                                
                            }
                            const slowingFactor = 0.7;
                            Matter.Body.setVelocity(squirrel, {x: squirrel.velocity.x *slowingFactor, y: squirrel.velocity.y * slowingFactor})
                        }
                }
            }
        }
    );

}

export default handleCollision;
