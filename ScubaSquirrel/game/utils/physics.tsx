import Matter, { World } from "matter-js";
import { useState } from "react";
import PuffaFish from "../gameObjects/PuffaFish";


const Physics =(entities: any, {touches, time, dispatch} : any) => {
    let engine= entities.physics.engine

    touches.filter((t: any) => (t.type === 'press'))
    .forEach((t: any) => {
        // const {pageX, pageY} = t.event
        const touchX = (t.event.pageX);
        const touchY = (t.event.pageY - 140);
        // const {x,y} = entities.Squirrel.body.position
        const squirrelX = entities.Squirrel.body.position.x
        const squirrelY = entities.Squirrel.body.position.y

        console.log(`hello press at (${touchX}, ${touchY})`)
        console.log(`Squarrel is at: (${squirrelX}, ${squirrelY})`)
        
        const xVelo = ((touchX - squirrelX) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*1
        const yVelo = ((touchY - squirrelY) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*1
        console.log(`x Numerator: ${touchX - squirrelX}`)
        console.log(`y Numerator: ${touchY - squirrelY}`)
        console.log (`xDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
        console.log (`yDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
        console.log(`(xVelo , yVelo): (${xVelo}, ${yVelo}) \n\n`)
        console.log(`------------------------------------------------------------------`)

        Matter.Body.applyForce(entities.Squirrel.body, {x:0 , y:0}, {x:-0.000002, y: -0.000002})
        
        Matter.Body.setVelocity(entities.Squirrel.body,{
            x:xVelo,
            y:yVelo
        })

        // Matter.Body.setVelocity(entities.Fish1.body,{
        //     x:-xVelo,
        //     y:-yVelo
        // })
        // Matter.Body.setVelocity(entities.Fish2.body,{
        //     x:-xVelo,
        //     y:-yVelo
        // })
        
    })   
    
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
            if ((puffaFish.bounds.max.x - puffaFish.bounds.min.x) < 75){
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

    Matter.Engine.update(engine, time.delta)

    return entities;
}
export default Physics