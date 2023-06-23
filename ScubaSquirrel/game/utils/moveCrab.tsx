import Matter from "matter-js";
import { Dimensions } from "react-native";

let moveValue: number = 1;

const moveCrab = (entities: any)=>{
    const screenLeftPos: number = 50;
    const screenRightPos: number = Dimensions.get('screen').width -50; 
    const crabPosition: number = entities.Crab.body.position.x;
    // console.log(`moveCrab: SLP, SRP, mV, CP: ${screenLeftPos}, ${screenRightPos}, ${moveValue}, ${crabPosition}`)

    
    Matter.Body.translate(entities.Crab.body,{
        x:moveValue,
        y:0
    })

    if(crabPosition >= screenRightPos ){
        // Matter.Body.translate(entities.Crab.body,{x:-10,y:0})
        moveValue = -0.5;
        // console.log(`at right: ${crabPosition}`)
    }
    if(crabPosition <= screenLeftPos){
        moveValue = 0.5;
        // console.log(`at left: ${crabPosition}`)
    }
}    

export default moveCrab;