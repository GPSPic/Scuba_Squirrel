import Matter, { World } from "matter-js";
import { useState } from "react";
import PuffaFish from "../gameObjects/PuffaFish";
import moveSquirrel from "./moveSquirrel";
import handleCollision from "./collisions";
import airConsumptionOngoing from "./airConsumptionOngoing";
import { log } from "react-native-reanimated";

const Physics =(entities: any, {touches, time, dispatch} : any) => {
    let engine = entities.physics.engine;
    let squirrel = entities.Squirrel;
                   

    moveSquirrel(entities, touches);   
    handleCollision(engine);
    airConsumptionOngoing(squirrel, time);    
                    
    Matter.Engine.update(engine, time.delta)
    
    return entities;
}

export default Physics



// console.log(`x Numerator: ${touchX - squirrelX}`)
// console.log(`y Numerator: ${touchY - squirrelY}`)
// console.log (`xDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
// console.log (`yDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
// console.log(`(xVelo , yVelo): (${xVelo}, ${yVelo}) \n\n`)
// console.log(`------------------------------------------------------------------`)
// console.log(`hello press at (${touchX}, ${touchY})`)
// console.log(`Squarrel is at: (${squirrelX}, ${squirrelY})`)