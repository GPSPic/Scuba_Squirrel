
import Matter from "matter-js";

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

        // console.log(`hello press at (${touchX}, ${touchY})`)
        // console.log(`Squarrel is at: (${squirrelX}, ${squirrelY})`)
        
        const xVelo = ((touchX - squirrelX) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*3
        const yVelo = ((touchY - squirrelY) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*3
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

    })

    Matter.Engine.update(engine, time.delta)

    return entities;
}
export default Physics