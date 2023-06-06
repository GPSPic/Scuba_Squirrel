import Matter from 'matter-js'
import Squirrel from '../components/Squirrel';
import Wall from '../components/Wall';
import Floor from '../components/Floor';
import Fish from '../components/Fish';
import { Dimensions } from 'react-native';

export default (restart: any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0;

    const screenWidth: number = Dimensions.get("window").width;
    const screenHeight: number = Dimensions.get("window").height;

    return{
        physics: {engine, world},
        Squirrel: Squirrel(world, 'orange',{x:50, y:200}, {height: 40, width:40}),
        Fish: Fish(world, 'blue',{x:200, y:200}, {width:10}),
        WallLeft: Wall(world, 'brown',{x:0, y:screenHeight/2}, {height: screenHeight, width: 20}),
        WallRight: Wall(world, 'brown',{x:screenWidth, y:screenHeight/2}, {height: screenHeight, width: 20}),
        Floor: Floor(world, 'yellow',{x:screenWidth/2, y:screenHeight}, {height: 30, width: screenWidth-20}),
        
    }
}