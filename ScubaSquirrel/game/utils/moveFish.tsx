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
        
      if (fishPosition >= screenRightPos) {
        value.direction *= -1
      } else if (fishPosition <= screenLeftPos) {
        value.direction *= -1
    }
    moveValue = value.direction * generic.getRandomValue(1,3)
      fishEntities.push({ fish: value, moveValue });
  }
});


  for (const fish of fishEntities) {
    Matter.Body.translate(fish.fish.body, {
      x: fish.moveValue,
      y: 0,
    });
  }
};

export default moveFish;




