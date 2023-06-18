import Matter from "matter-js";
import { Dimensions } from "react-native";
import generic from "./generic";

const moveJellyFish = (entities: any) => {
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );

  let jellyFishEntities: any[] = [];
  // const screenLeftPos: number = 50;
  // const screenRightPos: number = Dimensions.get("window").width - 50;
  const screenHeight: number = Dimensions.get('window').height;
  const screenWidth: number = Dimensions.get('window').width;
  const screenTopPos: number = screenWidth/12*1.45 + 30;
  const screenBottomPos: number =  screenHeight - screenHeight/7 - 30;

  Object.values(filteredEntities)
    .forEach((jellyFish: any) => {
      if (jellyFish.body.label === 'JellyFish') {
        const jellyFishPosition: number = jellyFish.body.position.y;
        
        let moveValue;
        
        if (jellyFishPosition <= screenTopPos) {
          jellyFish.direction = 0.5
        } else if (jellyFishPosition >= screenBottomPos) {
          jellyFish.direction = -0.5
        }
        moveValue = jellyFish.direction 
        // * generic.getRandomValue(1,3)
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




