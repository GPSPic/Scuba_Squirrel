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

import RegularFish from '../gameObjects/RegularFish';


export default (restart: any) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.0;

  const screenWidth: number = Dimensions.get("window").width;
  const screenHeight: number = Dimensions.get("window").height;


  const randomPuffaFish = () => {
    const numberOfPuffaFish = generic.getRandomValue(1, 4);
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
          {x: generic.getRandomValue(0,400) , y: generic.getRandomValue(0,350)},
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
  const totalObstacle = [...randomPuffaFish(), ...randomKelp(), ...randomRegularFish() ]
  // console.log(`Puffa: ${randPuffaFish.length}`)
  // console.log(`Obstalce: ${randObstacle.length}`)
  console.log(`Total: ${totalObstacle.length}`)

  return {
    physics: { engine, world },
    Squirrel: Squirrel(world, 'orange', { x: screenWidth / 2, y: 30 }, { height: 50, width: 30 }),
    ...totalObstacle,
    WallLeft1: Wall(world, 'brown', { x: 0, y: screenHeight / 2 }, { height: screenHeight, width: 20 }),
    Roof: Roof(world,'green',{x:screenWidth/2, y:1},{height:2,width: screenWidth}),
    WallRight1: Wall(world, 'brown', { x: screenWidth, y: screenHeight / 2 }, { height: screenHeight, width: 20 }),
    FloorBottom: Floor(world, 'yellow', { x: screenWidth / 2, y: screenHeight + 10 }, { height: 30, width: screenWidth - 20 }),
    DK1: Obstacle(world, 'brown', { x: screenWidth / 8, y: screenHeight *0.25 }, { height: 40, width: screenWidth }),
    DK2: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight *0.5 }, { height: 40, width: screenWidth }),
    DK3: Obstacle(world, 'brown', { x: screenWidth / 4, y: screenHeight * .75 }, { height: 40, width: screenWidth }),
    DK4: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight * .6 }, { height: 40, width: screenWidth }),
    // Obstacle5: Obstacle(world, 'brown', { x: screenWidth, y: screenHeight * .85 }, { height: 15, width: screenWidth }),
    
    // Acorn1: Acorn(world, 'green', { x: screenWidth / 8, y: screenHeight / 8 }, { radius: 10 }),
    Acorn2: Acorn(world, 'green', { x: screenWidth / 8, y: screenHeight * 0.7 }, { radius: 20 })

  }
}  