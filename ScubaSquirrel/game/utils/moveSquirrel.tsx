import Matter from "matter-js";

const moveSquirrel = (entities: any, screenTouch: any)=>{
    screenTouch.filter((t: any) => (t.type === 'press'))
        .forEach((t: any) => {
        const touchX = (t.event.pageX);
        const touchY = (t.event.pageY - 140);
        const squirrelX = entities.Squirrel.body.position.x
        const squirrelY = entities.Squirrel.body.position.y

        const xVelo = ((touchX - squirrelX) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*2
        const yVelo = ((touchY - squirrelY) / (Math.abs(touchX - squirrelX) + Math.abs(touchY - squirrelY)))*2
    
    
        Matter.Body.setVelocity(entities.Squirrel.body,{
            x:xVelo,
            y:yVelo
        })                
    })   
} 

export default moveSquirrel;