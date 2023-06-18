import Matter from "matter-js";
import { Dimensions } from "react-native";
import generic from "./generic";

const moveFish = (entities: any) => {
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );

  let fishEntities: any[] = [];
  const screenLeftPos: number = 50;
  const screenRightPos: number = Dimensions.get("window").width - 50;

  Object.values(filteredEntities).forEach((fish: any) => {
    if (fish.body.label === "RegularFish") {
      const fishPosition: number = fish.body.position.x;
        
      let moveValue;
        
      if (fishPosition >= screenRightPos + 80) {
        fish.direction *= -1;
        fish.imageNumber = generic.getRandomValue(0,8)
      } else if (fishPosition <= screenLeftPos -80) {
        fish.direction *= -1;
        // want to select from an array of images facing left to right. 
        fish.imageNumber = generic.getRandomValue(0,8)
    }
    moveValue = fish.direction * generic.getRandomValue(1,3);
    fishEntities.push({ fish, moveValue });
  }
});


  for (const item of fishEntities) {
    Matter.Body.translate(item.fish.body, {
      x: item.moveValue,
      y: 0,
    });
  }
};

export default moveFish;




