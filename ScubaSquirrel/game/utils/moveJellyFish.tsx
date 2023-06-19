import Matter from "matter-js";
import { Dimensions } from "react-native";
import generic from "./generic";

const moveJellyFish = (entities: any) => {
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );

  let jellyFishEntities: any[] = [];
  const screenFloor: number = 50;
  const screenHeight: number = Dimensions.get("window").height - 50;

  Object.values(filteredEntities).forEach((jellyFish: any) => {
    if (jellyFish.body.label === 'JellyFish') {
      const jellyFishPosition: number = jellyFish.body.position.y;

      let moveValue;
        
      if (jellyFishPosition >= screenHeight) {
        jellyFish.direction *= -1
      } else if (jellyFishPosition <= screenFloor) {
        jellyFish.direction *= -1
    }
    moveValue = jellyFish.direction * generic.getRandomValue(1,3)
      jellyFishEntities.push({ jellyFish, moveValue });
  }
});


  for (const item of jellyFishEntities) {
    Matter.Body.translate(item.jellyFish.body, {
      x: 0,
      y: item.moveValue,
    });
  }

//   console.log(`fish mv: ${jellyFishEntities[0].moveValue}`);
};

export default moveJellyFish;




