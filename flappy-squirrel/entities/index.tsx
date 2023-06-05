import Matter from 'matter-js'
import Squirrel from '../components/Squirrel';

export default (restart: any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0;

    return{
        physics: {engine, world},
        Squirrel: Squirrel(world, 'orange',{x:50, y:200}, {height: 40, width:40})
    }
}