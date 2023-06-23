import Matter, { World } from "matter-js";
import { useState } from "react";
import PuffaFish from "../gameObjects/PuffaFish";
import moveSquirrel from "./moveSquirrel";
import handleCollision from "./collisions";
import moveCrab from "./moveCrab";
import moveJellyFish from "./moveJellyFish";
import moveFish from "./moveFish";

const Physics =(entities: any, {touches, time, dispatch} : any) => {
  let engine= entities.physics.engine

    moveSquirrel(entities, touches);   
    handleCollision(engine, dispatch);
    moveCrab(entities);    
    
    moveJellyFish(entities);
    moveFish(entities);
                    
    Matter.Engine.update(engine, time.delta)
                    
  return entities;
               
}
export default Physics