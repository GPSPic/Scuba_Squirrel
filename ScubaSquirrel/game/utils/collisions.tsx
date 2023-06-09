import Matter, { World } from "matter-js";


const handleCollision = (engine: any) => {

    Matter.Events.on(engine, 'collisionStart', (event) => {
        const collisionPairs = event.pairs;
        
        for (const collisionPair of collisionPairs) {
            const bodyA = collisionPair.bodyA;
            const bodyB = collisionPair.bodyB;
            let puffaFish;
            let squirrel;
            let acorn;
            
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
                    
                    // Matter.Body.setVelocity(squirrel, { x: -2, y: 2 });
                    // need to add a guard to cap puffa bounds.
                    if ((puffaFish.bounds.max.x - puffaFish.bounds.min.x) < 95){
                        // console.log(puffaFish.bounds.max.x - puffaFish.bounds.min.x)
                        Matter.Body.scale(puffaFish, 1.001, 1.001);
                        
                        // After x ticks descale the fish
                    }
                    // Matter.Composite.remove(engine.world, puffaFish);
                    // Matter.Body.setPosition(puffaFish, {x:1000000 , y:100000})
                }
                
                if (
                    (bodyA.label === "Acorn" && bodyB.label === "Squirrel") ||
                    (bodyA.label === "Squirrel" && bodyB.label === "Acorn")
                    ) {
                        if (bodyA.label === "Acorn") {
                            acorn = bodyA;
                            squirrel = bodyB;
                        } else {
                            squirrel = bodyA;
                            acorn = bodyB;
                        }
                        Matter.Composite.remove(engine.world, acorn)
                        Matter.Body.setPosition(acorn, {x:1000000 , y:100000})
                        
                    }
                }
            });
    }

    export default handleCollision;