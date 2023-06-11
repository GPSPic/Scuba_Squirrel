import Matter, { World } from "matter-js";


const collidedPairs = new Set();

const handleCollision = (engine: any, dispatch: any) => {

    Matter.Events.on(engine, 'collisionStart', (event) => {
        const collisionPairs = event.pairs;
        
        for (const collisionPair of collisionPairs) {
            const bodyA = collisionPair.bodyA;
            const bodyB = collisionPair.bodyB;
            const pairId = `${collisionPair.id}`;
            let puffaFish;
            let squirrel;
            let acorn;
            let wall;
            let obstacle;
            
            if (
                (bodyA.label === "PuffaFish" && bodyB.label === "Squirrel") ||
                (bodyA.label === "Squirrel" && bodyB.label === "PuffaFish")
                ) {
                    if (bodyA.label === "PuffaFish") {
                        puffaFish = bodyA;
                        squirrel = bodyB;
                    } else {
                        squirrel = bodyA;
                        puffaFish = bodyB;
                    }
                    
                    Matter.Body.setVelocity(squirrel, { x: -2, y: 2 });
                    
                    if ((puffaFish.bounds.max.x - puffaFish.bounds.min.x) < 95){
                        Matter.Body.scale(puffaFish, 1.001, 1.001);
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
                    (bodyA.label === "Squirrel" && bodyB.label === "Wall") ||
                    (bodyA.label === "Wall" && bodyB.label === "Squirrel")
                    ) {
        
                        if (bodyA.label === "Wall") {
                            wall = bodyA;
                            squirrel = bodyB;
                        } else {
                            squirrel = bodyA;
                            wall = bodyB;
                        }

                        dispatch({ type: 'game_over' });
                    }

                if (
                    (bodyA.label === "Squirrel" && bodyB.label === "Obstacle") ||
                    (bodyA.label === "Obstacle" && bodyB.label === "Squirrel")
                    ) {
        
                        if (bodyA.label === "Obstacle") {
                            obstacle = bodyA;
                            squirrel = bodyB;
                        } else {
                            squirrel = bodyA;
                            obstacle = bodyB;
                        }

                        dispatch({ type: 'game_over' });
                    }

                
                }
            });
    }

    export default handleCollision;
  
  

  