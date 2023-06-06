import Matter from 'matter-js'
import Squirrel from '../components/Squirrel';
import Wall from '../components/Wall';
import Floor from '../components/Floor';
import Fish from '../components/Fish';
import { Dimensions } from 'react-native';
import ViewPort from '../components/ViewPort';

export default (restart: any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0;

    const screenWidth: number = Dimensions.get("window").width;
    const screenHeight: number = Dimensions.get("window").height;

    return{
        physics: {engine, world},
        Squirrel: Squirrel(world, 'orange',{x:screenWidth/2, y:screenHeight/2}, {height: 20, width:20}),
        // ViewPort: ViewPort(world, 'green',{x:150, y:200}, {height: 60, width:60}),
        // Fish: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish1: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish2: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish3: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish4: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        // Fish5: Fish(world, 'blue',{x:200, y:200}, {radius:20}),
        WallLeft1: Wall(world, 'brown',{x:0, y:screenHeight/2}, {height: screenHeight, width: screenWidth/3}),
        WallRight1: Wall(world, 'brown',{x:screenWidth, y:screenHeight/2}, {height: screenHeight, width: screenWidth/3}),
        WallLeft2: Wall(world, 'black',{x:0, y:screenHeight/2+screenHeight}, {height: screenHeight, width: screenWidth/3}),
        WallRight2: Wall(world, 'black',{x:screenWidth, y:screenHeight/2+screenHeight}, {height: screenHeight, width: screenWidth/3}),
        // Floor: Floor(world, 'yellow',{x:screenWidth/2, y:screenHeight}, {height: 30, width: screenWidth-20}),
        
    }
}