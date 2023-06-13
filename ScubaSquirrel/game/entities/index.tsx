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
import CaveCentre from '../gameObjects/CaveCentre';
import RegularFish from '../gameObjects/RegularFish';
import JellyFish from '../gameObjects/JellyFish';
import Crab from '../gameObjects/Crab';


export default (restart: any) => {
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;
  engine.gravity.y = 0.0;

  const squirrelWidth: number = 50;
  const screenWidth: number = Dimensions.get("window").width;
  const screenHeight: number = Dimensions.get("window").height;
  const flexParts = 7;
  const gameTop: number = (screenHeight * (1/flexParts));
  const gameBottom: number = (screenHeight-gameTop);
  const gameHeight: number = gameBottom;
  const gameMiddleY: number = gameHeight/2;
  const DK2StartPos = generic.getRandomValue(- (screenWidth/2)+15, (screenWidth/2)-75 );

  console.log(`SH, SH*1/7, SH*6/7, SH/2: ${screenHeight}, ${screenHeight*1/7}, ${screenHeight*6/7}, ${screenHeight/2}`)
  console.log(`GT, GB, GH, GMY: ${gameTop}, ${gameBottom}, ${gameHeight}, ${gameMiddleY}`)

  const randomPuffaFish = () => {
    const numberOfPuffaFish = generic.getRandomValue(1, 2);
    const puffaFishEntities = [];
    for (let i = 1; i <= numberOfPuffaFish; i++) {
      puffaFishEntities.push(PuffaFish(world, 'blue', 
      {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
      {radius:generic.getRandomValue(10,20)},
      ));
    }
    return puffaFishEntities;
  }

  const randomJellyFish = () => {
    const numberOfJellyFish = generic.getRandomValue(1, 2);
    const JellyFishEntities = [];
    for (let i = 1; i <= numberOfJellyFish; i++) {
      JellyFishEntities.push(JellyFish(world, 'blue', 
      {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
      {radius:generic.getRandomValue(10,20)},
      ));
    }
    return JellyFishEntities;
  }

  const randomKelp = () => {
    const numberOfRandomKelp = generic.getRandomValue(3,6)
    const kelpEntities = [];
    for(let i = 1; i <= numberOfRandomKelp; i++){
      kelpEntities.push(Kelp(world, 'pink', 
          {x: generic.getRandomValue(30, screenWidth - 30), 
              y: generic.getRandomValue(screenHeight*1/flexParts + 50, screenHeight*(flexParts-1)/flexParts - 50)},
          {height:80, width: 40}
      ))
    }
    return kelpEntities
  }
  const randomRegularFish = () => {
    const numberOfRandomNiceFish = generic.getRandomValue(5,5)
    const niceFishEntities = [];
    for(let i = 1; i <= numberOfRandomNiceFish; i++){
      niceFishEntities.push(RegularFish(world, 'pink', 
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            { radius: 30 }, generic.getRandomValue(0,3)
        ))
    }
    return niceFishEntities
  }

  const totalObstacle = [...randomKelp(), ...randomPuffaFish(), ...randomRegularFish(), ...randomJellyFish()]
  console.log(`Total: ${totalObstacle.length}`)

  return {
    physics: { engine, world },
    Roof: Roof(world,'green',{x:screenWidth/2, y:-1},{height:2,width: screenWidth}),
    Floor: Roof(world,'white',{x:screenWidth/2, y:gameBottom - 2},{height:4,width: screenWidth}),
    // WallLeft: Wall(world, 'brown', { x: -5, y: screenHeight/2 }, { height: screenHeight, width: 40 },0),
    WallLeft: Wall(world, 'brown', { x: -5, y: gameMiddleY }, { height: gameHeight, width: 40 },0),
    WallRight: Wall(world, 'brown', { x: screenWidth+5, y: gameMiddleY }, { height: gameHeight, width: 40 },1),
    FloorBottom: Floor(world, 'yellow', { x: screenWidth / 2, y: gameBottom}, { height: 80, width: screenWidth }),
    DK1: Obstacle(world, 'brown', 
      { x: generic.getRandomValue(-screenWidth/2+75,screenWidth/2-75), y: screenHeight *0.2 }, 
      { height: 40, width: screenWidth }),
    DK2L: Obstacle(world, 'brown', 
      { x: DK2StartPos, y: screenHeight *0.4 }, 
      { height: 40, width: screenWidth }),
    DK2R: Obstacle(world, 'brown', 
      { x: screenWidth + DK2StartPos + generic.getRandomValue(1.5*squirrelWidth,2.5*squirrelWidth), y: screenHeight * 0.4 }, 
      { height: 40, width: screenWidth }),
    DK3: Obstacle(world, 'brown', 
      { x: generic.getRandomValue((screenWidth/2)+75,screenWidth+75), y: screenHeight * .6 }, 
      { height: 40, width: screenWidth }),

    Acorn1: Acorn(world, 'green', { x: screenWidth / 8, y: gameBottom - 20 }, { radius: 20 }),
    Cave: Cave(world, 'pink', { x: screenWidth-60, y:(gameBottom-40)}, { height: 75, width: 90 }),
    CaveCentre: CaveCentre(world, 'white', { x: screenWidth-60, y:(gameBottom-40)}, {radius: 5}),
    Squirrel: Squirrel(world, 'orange', { x: screenWidth / 2, y: 30 }, { height: 75, width: squirrelWidth }),
    ...totalObstacle,
    Crab: Crab(world, 'red', {x: screenWidth/3, y:gameBottom-30}, {radius: 30})
  }
}  