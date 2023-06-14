import Matter from "matter-js";
import { Dimensions } from "react-native";

let moveValue: number = 1;

const moveJellyFish = (entities: any)=>{
    const screenHeight: number = Dimensions.get('window').height;
    const screenTopPos: number = 30;
    const screenBottomPos: number =  screenHeight - screenHeight/7 - 30;
    const jellyFishPosition: number = entities.JellyFish.body.position.y;


    
    Matter.Body.translate(entities.JellyFish.body,{
      x:0,
      y:moveValue
    })

    if(jellyFishPosition <= screenTopPos ){
        // Matter.Body.translate(entities.JellyFish.body,{x:-10,y:0})
        moveValue = 1;
        // console.log(`at right: ${JellyFishPosition}`)
    }
    if(jellyFishPosition >= screenBottomPos){
        moveValue = -1;
        // console.log(`at left: ${JellyFishPosition}`)
    }
}    

export default moveJellyFish;