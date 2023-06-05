
import Matter from "matter-js";

const Physics =(entities, {touches, time, dispatch}) => {
    let engine= entities.physics.engine

    touches.filter(t => t.type === 'press')
    .forEach(t => {
        Matter.Body.setVelocity(entities.Squirrel.body,{
            x:0,
            y: -3
        })
    })

    Matter.Engine.update(engine, time.delta)

    return entities;
}
export default Physics