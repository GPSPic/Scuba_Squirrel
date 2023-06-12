import Matter from 'matter-js';
import Squirrel from '../gameObjects/Squirrel';
import Wall from '../gameObjects/Wall';
import Floor from '../gameObjects/Floor';
import PuffaFish from '../gameObjects/PuffaFish';
import { Dimensions } from 'react-native';
import Obstacle from '../gameObjects/Obstacle';
import Acorn from '../gameObjects/Acorn';
import generic from '../utils/generic';
import Kelp from '../gameObjects/Kelp';
import Roof from '../gameObjects/Roof';
import Cave from '../gameObjects/Cave';

import RegularFish from '../gameObjects/RegularFish';


export default (restart: any) => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;
  engine.gravity.y = 0.0;

  const screenWidth: number = Dimensions.get("window").width;
  const screenHeight: number = Dimensions.get("window").height;
  const gameTop: number = screenHeight * 1/8;
  const gameBottom: number = screenHeight * 7/8

  console.log(`SH, SH*6/8, SH/2: ${screenHeight}, ${screenHeight*6/8}, ${screenHeight/2}`)

  const randomPuffaFish = () => {
    const numberOfPuffaFish = generic.getRandomValue(4, 8);
    const puffaFishEntities = [];
    for (let i = 1; i <= numberOfPuffaFish; i++) {
      puffaFishEntities.push(PuffaFish(world, 'blue', 
      {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
      {radius:generic.getRandomValue(10,20)},generic.getRandomValue(0,1),
      ));
    }
    return puffaFishEntities;
  }

  const randomKelp = () => {
    const numberOfRandomKelp = generic.getRandomValue(3,6)
    const kelpEntities = [];
    for(let i = 1; i <= numberOfRandomKelp; i++){
      kelpEntities.push(Kelp(world, 'pink', 
          {x: generic.getRandomValue(30, screenWidth - 30) , y: generic.getRandomValue(screenHeight*2/8 + 50, screenHeight*7/8 - 50)},
          {height:80, width: 40}
      ))
    }
    return kelpEntities
  }
  const randomRegularFish = () => {
    const numberOfRandomNiceFish = generic.getRandomValue(5,9)
    const niceFishEntities = [];
    for(let i = 1; i <= numberOfRandomNiceFish; i++){
      niceFishEntities.push(RegularFish(world, 'pink', 
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            { height: generic.getRandomValue(20,30), width: generic.getRandomValue(40, 60) }, generic.getRandomValue(0,3)
        ))
    }
    return niceFishEntities
  }

  // const randPuffaFish = randomFish();
  // const randObstacle = randomObstacle();
  const totalObstacle = [...randomKelp(), ...randomPuffaFish(), ...randomRegularFish() ]
  // console.log(`Puffa: ${randPuffaFish.length}`)
  // console.log(`Obstalce: ${randObstacle.length}`)
  console.log(`Total: ${totalObstacle.length}`)

  return {
    physics: { engine, world },
    Roof: Roof(world,'green',{x:screenWidth/2, y:1},{height:2,width: screenWidth}),
    Floor: Roof(world,'green',{x:screenWidth/2, y:gameBottom-3},{height:1,width: screenWidth}),
    WallLeft1: Wall(world, 'brown', { x: 0, y: screenHeight/2 }, { height: screenHeight, width: 20 }),
    WallRight1: Wall(world, 'brown', { x: screenWidth, y: screenHeight/2 }, { height: screenHeight, width: 20 }),
    // FloorBottom: Floor(world, 'yellow', { x: screenWidth / 2, y: screenHeight*7/8}, { height: 80, width: screenWidth }),
    DK1: Obstacle(world, 'brown', { x: screenWidth / 8, y: screenHeight *0.25 }, { height: 40, width: screenWidth }),
    // DK2: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight *0.5 }, { height: 40, width: screenWidth }),
    // DK3: Obstacle(world, 'brown', { x: screenWidth / 4, y: screenHeight * .75 }, { height: 40, width: screenWidth }),
    DK4: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight * .6 }, { height: 40, width: screenWidth }),
    // Acorn1: Acorn(world, 'green', { x: screenWidth / 8, y: screenHeight / 8 }, { radius: 10 }),
    Acorn2: Acorn(world, 'green', { x: screenWidth / 8, y: screenHeight*6/8-20 }, { radius: 20 }),
    Cave: Cave(world, 'pink', { x: screenWidth-60, y:(screenHeight/8)}, { height: 75, width: 90 }),
    Squirrel: Squirrel(world, 'orange', { x: screenWidth / 2, y: 30 }, { height: 50, width: 30 }),
    ...totalObstacle,
    // ...randomKelp()
  }
}  