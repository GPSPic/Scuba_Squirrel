import Matter from "matter-js";
import { Dimensions } from "react-native";
import generic from "./generic";





const moveJellyFish = (entities: any)=>{
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );
    let jellyFishEntities: any[] = [];
    const screenHeight: number = Dimensions.get('window').height;
    const screenWidth: number = Dimensions.get('window').width;
    const screenTopPos: number = screenWidth/12*1.45 + 45;
    const screenBottomPos: number =  screenHeight*6/8 - 30;

  Object.values(filteredEntities)
    .forEach((jellyFish: any) => {
      if (jellyFish.body.label === 'JellyFish') {
        const jellyFishPosition: number = jellyFish.body.position.y;
        // console.log(`JP, SBP, STP, SH: ${jellyFishPosition}, ${screenBottomPos}, ${screenTopPos}, ${screenHeight}`)
        
        let moveValue;
        
        if (jellyFishPosition <= screenTopPos) {
          jellyFish.direction *= -1
        } else if (jellyFishPosition >= screenBottomPos) {
          jellyFish.direction *= -1
          Matter.Body.setPosition(jellyFish.body, {x:generic.getRandomValue(30, screenWidth- 30), y: jellyFishPosition})
        }
        moveValue = jellyFish.direction 
        // * generic.getRandomValue(1,2) 
      
        jellyFishEntities.push({ jellyFish, moveValue });
      }
    }
  );

  for (const item of jellyFishEntities) {
    Matter.Body.translate(item.jellyFish.body, {
      x: 0,
      y: item.moveValue,
    });
  }

  // console.log(`Jelly mv: ${jellyFishEntities[0].moveValue}`);
};

export default moveJellyFish;




