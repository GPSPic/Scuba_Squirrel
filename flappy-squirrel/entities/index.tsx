import Matter from 'matter-js'
import Squirrel from '../components/Squirrel';

export default (restart: any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.05;

    return{
        physics: {engine, world},
        Squirrel: Squirrel(world, 'pink',{x:50, y:200}, {height: 40, width:40})
    }
}