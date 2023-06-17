import Matter from "matter-js";
import { Dimensions } from "react-native";

let moveValue: number = 1;

const moveFish = (entities: any) => {
    // filtered keys that are 'numbers' - thank you the oracle for !isNaN
  const filteredEntities = Object.fromEntries(
    Object.entries(entities).filter(([key]) => !isNaN(parseInt(key)))
  );

  let fishEntities = [];

// our structure looked like '1' : {body, ...etc} - though it didn't look like it.  
  Object.values(filteredEntities).forEach((value: any) => {
    if (value.body.label === "RegularFish") {
      fishEntities.push(value);
    }
  });

  for (const fish of fishEntities) {
    Matter.Body.translate(fish.body, {
      x: moveValue,
      y: 0,
    });
  }

  const screenLeftPos: number = 50;
  const screenRightPos: number = Dimensions.get("screen").width - 50;

  for (const fish of fishEntities) {
    const fishPosition: number = fish.body.position.x;

    if (fishPosition >= screenRightPos) {
      moveValue = -1;
    }

    if (fishPosition <= screenLeftPos) {
      moveValue = 1;
    }
  }

//   console.log(filteredEntities);
//   console.log(fishEntities);
//   console.log(`moveFish: SLP, SRP, mV: ${screenLeftPos}, ${screenRightPos}, ${moveValue}`);
};

export default moveFish;


