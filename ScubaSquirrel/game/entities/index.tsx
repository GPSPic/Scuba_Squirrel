import Matter from 'matter-js';
import Squirrel from '../gameObjects/Squirrel';
import Wall from '../gameObjects/Wall';
import Floor from '../gameObjects/Floor';
import PuffaFish from '../gameObjects/PuffaFish';
import { Dimensions } from 'react-native';
import Obstacle from '../gameObjects/Obstacle';
import Acorn from '../gameObjects/Acorn';
import generic from '../utils/generic';
import RegularFish from '../gameObjects/RegularFish';


export default (restart: any ) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.0;

    const screenWidth: number = Dimensions.get("screen").width;
    const screenHeight: number = Dimensions.get("screen").height;

    // const screenXZero: number = Dimensions.get("window").

    console.log(`width: ${screenWidth}, height: ${screenHeight}`)

    console.log(`wall calcs: x,y / `)

    const puffaFishCount = generic.getRandomValue(1,6);

    return{
        physics: {engine, world},
        Squirrel: Squirrel(world, 'orange',{x:screenWidth/2, y:30}, {height: 50, width:30}),
        // Fish: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        PuffaFish1: PuffaFish(world, 'blue',
            // {x:200, y:200}, 
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)},generic.getRandomValue(0,1)),
        PuffaFish2: PuffaFish(world, 'blue',
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)},generic.getRandomValue(0,1)),
        PuffaFish3: PuffaFish(world, 'blue',
            // {x:200, y:200}, 
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)},generic.getRandomValue(0,1)),
        PuffaFish4: PuffaFish(world, 'blue',
            // {x:200, y:200}, 
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)},generic.getRandomValue(0,1)),
        Fish1: RegularFish(world, 'blue',
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)}, generic.getRandomValue(0,3)),
        Fish2: RegularFish(world, 'blue',
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)}, generic.getRandomValue(0,3)),
        Fish3: RegularFish(world, 'blue',
            {x:generic.getRandomValue(10,300), y:generic.getRandomValue(10,700)}, 
            {radius:generic.getRandomValue(10,20)}, generic.getRandomValue(0,3)),    
        
        WallLeft1: Wall(world, 'brown',{x:0, y:(screenHeight/2)}, {height: 450, width: 30}),
        WallRight1: Wall(world, 'brown',{x:screenWidth, y:screenHeight/2}, {height: screenHeight, width: 30}),
        FloorBottom: Floor(world, 'yellow',{x:screenWidth/2, y:screenHeight + 10}, {height: 30, width: screenWidth-20}),
        FloorTop: Floor(world, 'blue',{x:screenWidth/2, y:0}, {height: 10, width: screenWidth-20}),
        Obstacle1: Obstacle(world, 'brown',
            {x:generic.getRandomValue(-(screenWidth/2)+60, (screenWidth/2)-60), y:screenHeight/4}, 
            {height: 30, width: screenWidth}),
        Obstacle2: Obstacle(world, 'brown',
            // {x:screenWidth, y:screenHeight/2}, 
            {x:generic.getRandomValue(screenWidth/2, screenWidth), y:screenHeight/2}, 
            {height: 40, width: screenWidth}),
        Obstacle3: Obstacle(world, 'brown',
            // {x:screenWidth/4, y:screenHeight*.75}, 
            {x:generic.getRandomValue(-(screenWidth/2)+60, -(screenWidth/2)-60), y:screenHeight*.75}, 
            {height: 50, width: screenWidth}),
        Obstacle4: Obstacle(world, 'brown',
            // {x:screenWidth, y:screenHeight*.85}, 
            {x:generic.getRandomValue(screenWidth/2, screenWidth), y:screenHeight*.85}, 
            {height: 60, width: screenWidth}),
        Acorn1: Acorn(world, 'green',
            // {x:screenWidth/8 , y:screenHeight/8 }, 
            {x: generic.getRandomValue(0,screenWidth), y: generic.getRandomValue(0,screenHeight)},
            {radius:10 }),
        Acorn2: Acorn(world, 'green', 
            // {x:screenWidth/8 , y:screenHeight*0.7 }, 
            {x: generic.getRandomValue(0,screenWidth), y: generic.getRandomValue(0,screenHeight)},
            {radius:10 })  
    }
}