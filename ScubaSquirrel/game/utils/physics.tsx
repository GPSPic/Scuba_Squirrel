import Matter from "matter-js";
import { useState } from "react";

const Physics =(entities: any, {touches, time, dispatch} : any) => {
    let engine= entities.physics.engine

    touches.filter((t: any) => (t.type === 'press') || (t.type === 'longPress'))
    .forEach((t: any) => {
        // const {pageX, pageY} = t.event
        const touchX = t.event.pageX;
        const touchY = t.event.pageY;
        // const {x,y} = entities.Squirrel.body.position
        const squirrelX = entities.Squirrel.body.position.x
        const squirrelY = entities.Squirrel.body.position.y

        // const innerLeftWallX = entities.WallLeft1.body.bounds.max.x
        // const innerRighttWallX = entities.WallRight1.body.bounds.min.x

        // console.log(`inner walls: ${innerLeftWallX} , ${innerRighttWallX}`)

        // console.log(`hello press at (${touchX}, ${touchY})`)
        // console.log(`Squarrel is at: (${squirrelX}, ${squirrelY})`)
        
        const xVelo = ((touchX - squirrelX) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*2
        const yVelo = ((touchY - squirrelY) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*2
        // console.log(`x Numerator: ${touchX - squirrelX}`)
        // console.log(`y Numerator: ${touchY - squirrelY}`)
        // console.log (`xDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
        // console.log (`yDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
        // console.log(`(xVelo , yVelo): (${xVelo}, ${yVelo}) \n\n`)
        // console.log(`------------------------------------------------------------------`)

        Matter.Body.setVelocity(entities.Squirrel.body,{
            x:xVelo,
            y:yVelo
        })
        // Matter.Body.setVelocity(entities.ViewPort.body,{
        //     x:xVelo,
        //     y:yVelo
        // })

        // Matter.Body.setVelocity(entities.Fish1.body,{
        //     x:-xVelo,
        //     y:-yVelo
        // })
        // Matter.Body.setVelocity(entities.Fish2.body,{
        //     x:-xVelo,
        //     y:-yVelo
        // })
        // if(touchX > innerLeftWallX && touchX < innerRighttWallX){
            // Matter.Body.setVelocity(entities.WallLeft1.body,{
            //     x:-xVelo,
            //     y:-yVelo
            // })
            // Matter.Body.setVelocity(entities.WallRight1.body,{
            //     x:-xVelo,
            //     y:-yVelo
            // })
            // Matter.Body.setVelocity(entities.WallLeft2.body,{
            //     x:-xVelo,
            //     y:-yVelo
            // }) 
            // Matter.Body.setVelocity(entities.WallRight2.body,{
            //     x:-xVelo,
            //     y:-yVelo
            // })
        // }
    })   
    
    // Matter.Events.on(engine, 'collisionStart', (event) => {
    // Matter.Body.setVelocity(entities.WallLeft1.body, {x:0,y:0})
    // Matter.Body.setVelocity(entities.WallRight1.body, {x:0,y:0})
    // Matter.Body.setVelocity(entities.WallLeft2.body, {x:0,y:0})
    // Matter.Body.setVelocity(entities.WallRight2.body, {x:0,y:0})
        
    // })


    Matter.Engine.update(engine, time.delta)

    return entities;
}
export default Physics