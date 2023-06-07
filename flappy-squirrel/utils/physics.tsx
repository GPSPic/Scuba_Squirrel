
import Matter from "matter-js";
import { useState } from "react";

const Physics =(entities: any, {touches, time, dispatch} : any) => {
    let engine= entities.physics.engine

    touches.filter((t: any) => (t.type === 'press'))
    .forEach((t: any) => {
        // const {pageX, pageY} = t.event
        const touchX = t.event.pageX;
        const touchY = t.event.pageY;
        // const {x,y} = entities.Squirrel.body.position
        const squirrelX = entities.Squirrel.body.position.x
        const squirrelY = entities.Squirrel.body.position.y

        const innerLeftWallX = entities.WallLeft1.body.bounds.max.x
        const innerRighttWallX = entities.WallRight1.body.bounds.min.x

        console.log(`inner walls: ${innerLeftWallX} , ${innerRighttWallX}. Gap between is ${innerRighttWallX - innerLeftWallX}`)

        console.log(`hello press at (${touchX}, ${touchY})`)
        console.log(`Squarrel is at: (${squirrelX}, ${squirrelY})`)
        
        const xVelo = ((touchX - squirrelX) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*2
        const yVelo = ((touchY - squirrelY) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*2
        console.log(`x Numerator: ${touchX - squirrelX}`)
        console.log(`y Numerator: ${touchY - squirrelY}`)
        console.log (`xDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
        console.log (`yDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
        console.log(`(xVelo , yVelo): (${xVelo}, ${yVelo}) \n\n`)
        console.log(`------------------------------------------------------------------`)

        Matter.Body.setVelocity(entities.Squirrel.body,{
            x:xVelo,
            y:yVelo
        })
        const opposite = touchX - squirrelX
        const adjacent = touchY - squirrelY
        const angle = Math.atan(opposite/adjacent)
        // Matter.Body.rotate(entities.Squirrel.body, angle)

        // Matter.Body.setVelocity(entities.ViewPort.body,{
        //     x:xVelo,
        //     y:yVelo
        // })

        // Matter.Body.setVelocity(entities.Fish.body,{
        //     x:-xVelo,
        //     y:-yVelo
        // })
        // Matter.Body.setVelocity(entities.Fish1.body,{
        //     x:-xVelo,
        //     y:-yVelo
        // })
        // if(touchX > innerLeftWallX && touchX < innerRighttWallX){
        //     Matter.Body.setVelocity(entities.WallLeft1.body,{
        //         x:-xVelo,
        //         y:-yVelo
        //     })
        //     Matter.Body.setVelocity(entities.WallRight1.body,{
        //         x:-xVelo,
        //         y:-yVelo
        //     })
        //     Matter.Body.setVelocity(entities.WallLeft2.body,{
        //         x:-xVelo,
        //         y:-yVelo
        //     }) 
        //     Matter.Body.setVelocity(entities.WallRight2.body,{
        //         x:-xVelo,
        //         y:-yVelo
        //     })
        // }
    })   
    
    Matter.Events.on(engine, 'collisionStart', (event) => {
    //     const innerLeftX = entities.WallLeft1.body.bounds.max.x
    //     const innerRightX = entities.WallLeft1.body.bounds.min.x
    //     const width = innerLeftX - entities.WallLeft1.body.bounds.min.x
    //     const height1 = entities.WallLeft1.body.bounds.max.y - entities.WallLeft1.body.bounds.min.y

    
        // // Matter.Body.setPosition(entities.WallLeft1.body, {x: innerLeftX - (width/2), y: entities.WallLeft1.body.bounds.min.y + height1/2})
        // Matter.Body.setVelocity(entities.WallLeft1.body, {x:-0.5,y:0})
        // Matter.Body.setVelocity(entities.WallRight1.body, {x:0.5,y:0})
        // Matter.Body.setVelocity(entities.WallLeft2.body, {x:-0.5,y:0})
        // Matter.Body.setVelocity(entities.WallRight2.body, {x:0.5,y:0})
    })
        
    // Matter.Events.on(engine, 'collisionEnd', (event) => {
    // Matter.Body.setStatic(entities.WallLeft1.body, false)
    // Matter.Body.setVelocity(entities.WallRight1.body, {x:-0.01,y:0})
    // Matter.Body.setVelocity(entities.WallLeft2.body, {x:0.01,y:0})
    // Matter.Body.setVelocity(entities.WallRight2.body, {x:-0.01,y:0})
        
    // })


    Matter.Engine.update(engine, time.delta)

    return entities;
}
export default Physics