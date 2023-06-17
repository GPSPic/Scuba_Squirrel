import Matter from "matter-js";
import { Dimensions } from "react-native";
import generic from "./generic";

const moveJellyFish = (entities: any) => {
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );

  let jellyFishEntities: any[] = [];
  const screenLeftPos: number = 50;
  const screenRightPos: number = Dimensions.get("screen").width - 50;

  Object.values(filteredEntities).forEach((value: any) => {
    if (value.body.label === 'JellyFish') {
      const jellyFishPosition: number = value.body.position.x;
        

      let moveValue;
        
      if (jellyFishPosition >= screenRightPos) {
        value.direction *= -1
      } else if (jellyFishPosition <= screenLeftPos) {
        value.direction *= -1
    }
    moveValue = value.direction * generic.getRandomValue(1,3)
      jellyFishEntities.push({ jellyFish: value, moveValue });
  }
});

  for (const jellyFish of jellyFishEntities) {
    Matter.Body.translate(jellyFish.jellyFish.body, {
      x: jellyFish.moveValue,
      y: 0,
    });
  }

  console.log(`fish mv: ${jellyFishEntities[0].moveValue}`);
};

export default moveJellyFish;




