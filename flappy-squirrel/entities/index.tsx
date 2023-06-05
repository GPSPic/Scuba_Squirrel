import Matter from 'matter-js'

export default (restart: any) => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    engine.gravity.y = 0.05;

    return{
        physics: {engine, world},
    }
}