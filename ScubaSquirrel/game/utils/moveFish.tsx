import Matter from "matter-js";
import { Dimensions } from "react-native";
import generic from "./generic";

const moveFish = (entities: any) => {
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );

  let fishEntities: any[] = [];
  const screenLeftPos: number = 50;
  const screenRightPos: number = Dimensions.get("screen").width - 50;

  Object.values(filteredEntities).forEach((value: any) => {
    if (value.body.label === "RegularFish") {
      const fishPosition: number = value.body.position.x;
        
      let moveValue;
        
      if (fishPosition >= screenRightPos + 80) {
        value.direction *= -1;
        value.imageNumber = generic.getRandomValue(0,8)
      } else if (fishPosition <= screenLeftPos -80) {
        value.direction *= -1;
        value.imageNumber = generic.getRandomValue(0,8)
    }
    moveValue = value.direction * generic.getRandomValue(1,3);
    fishEntities.push({ fish: value, moveValue });
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




