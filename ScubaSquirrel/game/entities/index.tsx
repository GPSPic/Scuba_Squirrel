import Matter from 'matter-js';
import Squirrel from '../gameObjects/Squirrel';
import Wall from '../gameObjects/Wall';
import Floor from '../gameObjects/Floor';
import PuffaFish from '../gameObjects/PuffaFish';
import { Dimensions } from 'react-native';
import Obstacle from '../gameObjects/Obstacle';
import Acorn from '../gameObjects/Acorn';


export default (restart: any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.0;

    const screenWidth: number = Dimensions.get("window").width;
    const screenHeight: number = Dimensions.get("window").height;

    

    return{
        physics: {engine, world},
        Squirrel: Squirrel(world, 'orange',{x:screenWidth/2, y:30}, {height: 50, width:30}),
        // Fish: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        PuffaFish1: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        PuffaFish2: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        PuffaFish3: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        PuffaFish4: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish5: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish6: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish7: PuffaFish(world, 'blue',{x:200, y:200}, {radius:20}),
        WallLeft1: Wall(world, 'brown',{x:0, y:screenHeight/2}, {height: screenHeight, width: 20}),
        WallRight1: Wall(world, 'brown',{x:screenWidth, y:screenHeight/2}, {height: screenHeight, width: 20}),
        // WallLeft2: Wall(world, 'black',{x:0, y:screenHeight/2+screenHeight}, {height: screenHeight, width: screenWidth/3}),
        // WallRight2: Wall(world, 'black',{x:screenWidth, y:screenHeight/2+screenHeight}, {height: screenHeight, width: screenWidth/3}),
        FloorBottom: Floor(world, 'yellow',{x:screenWidth/2, y:screenHeight + 10}, {height: 30, width: screenWidth-20}),
        // FloorTop: Floor(world, 'blue',{x:screenWidth/2, y:0}, {height: 10, width: screenWidth-20}),
        Obstacle1: Obstacle(world, 'brown',{x:screenWidth/8, y:screenHeight/4}, {height: 10, width: screenWidth}),
        Obstacle2: Obstacle(world, 'brown',{x:screenWidth, y:screenHeight/2}, {height: 10, width: screenWidth}),
        Obstacle3: Obstacle(world, 'brown',{x:screenWidth/4, y:screenHeight*.75}, {height: 10, width: screenWidth}),
        Obstacle4: Obstacle(world, 'brown',{x:screenWidth, y:screenHeight*.85}, {height: 10, width: screenWidth}),
        Acorn1: Acorn(world, 'green', {x:screenWidth/8 , y:screenHeight/8 }, {radius:10 }),
        Acorn2: Acorn(world, 'green', {x:screenWidth/8 , y:screenHeight*0.7 }, {radius:10 })  
    }
}