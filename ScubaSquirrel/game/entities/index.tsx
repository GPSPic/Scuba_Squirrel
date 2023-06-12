import Matter from 'matter-js';
import Squirrel from '../gameObjects/Squirrel';
import Wall from '../gameObjects/Wall';
import Floor from '../gameObjects/Floor';
import PuffaFish from '../gameObjects/PuffaFish';
import { Dimensions } from 'react-native';
import Obstacle from '../gameObjects/Obstacle';
import Acorn from '../gameObjects/Acorn';


export default (restart: any) => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    engine.gravity.y = 0.0;
  
    const screenWidth: number = Dimensions.get("window").width;
    const screenHeight: number = Dimensions.get("window").height;
  
    function getRandomNumber(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const randomFish = () => {
      const numberOfPuffaFish = getRandomNumber(1, 8);
      const puffaFishEntities = [];
      for (let i = 1; i <= numberOfPuffaFish; i++) {
        puffaFishEntities.push(PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }));
      }
      return puffaFishEntities;
    }

    const randomObstacle = () => {
        const numberOfRandomObstacles = getRandomNumber(1,6)
        const obstaclesEntities = [];
        for(let i = 1; i <= numberOfRandomObstacles; i++){
            obstaclesEntities.push(Obstacle(world, 'pink', {x: getRandomNumber(0,400) , y: getRandomNumber(0,350)},{height:getRandomNumber(10,20), width: getRandomNumber(10,30)}))
        }
        return obstaclesEntities
    }

   

    // const randPuffaFish = randomFish();
    // const randObstacle = randomObstacle();
    const totalObstacle = [...randomFish(), ...randomObstacle()]
    // console.log(`Puffa: ${randPuffaFish.length}`)
    // console.log(`Obstalce: ${randObstacle.length}`)
    console.log(`Total: ${totalObstacle.length}`)
  
    return {
      physics: { engine, world },
      Squirrel: Squirrel(world, 'orange', { x: screenWidth / 2, y: 30 }, { height: 50, width: 30 }),
      ...totalObstacle,
      // PuffaFish1: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish2: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish3: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish4: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish5: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish6: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish7: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
    //   PuffaFish8: PuffaFish(world, 'blue', { x: 200, y:200 }, { radius: 20 }),
      
      WallLeft1: Wall(world, 'brown', { x: 0, y: screenHeight / 2 }, { height: screenHeight, width: 20 }),
      WallRight1: Wall(world, 'brown', { x: screenWidth, y: screenHeight / 2 }, { height: screenHeight, width: 20 }),
      FloorBottom: Floor(world, 'yellow', { x: screenWidth / 2, y: screenHeight + 10 }, { height: 30, width: screenWidth - 20 }),
      Obstacle1: Obstacle(world, 'brown', { x: screenWidth / 8, y: screenHeight *0.25 }, { height: 10, width: screenWidth }),
      Obstacle2: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight *0.5 }, { height: 30, width: screenWidth }),
      Obstacle3: Obstacle(world, 'brown', { x: screenWidth / 4, y: screenHeight * .75 }, { height: 20, width: screenWidth }),
      Obstacle4: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight * .6 }, { height: 10, width: screenWidth }),
      Obstacle5: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight * .85 }, { height: 15, width: screenWidth }),
      
      // Acorn1: Acorn(world, 'green', { x: screenWidth / 8, y: screenHeight / 8 }, { radius: 10 }),
      Acorn2: Acorn(world, 'green', { x: screenWidth / 8, y: screenHeight * 0.7 }, { radius: 10 })
    }
}  