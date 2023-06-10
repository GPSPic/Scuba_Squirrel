import React from 'react'
import Matter from 'matter-js'
import { View } from 'react-native'

const Obstacle = (props : any) => {
    const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
    // const widthBody: number = props.body.size.width;
    // const heightBody: number = props.body.size.height;
    const xBody = props.body.position.x;
    const yBody = props.body.position.y;
    // const xBody = props.body.pos.x;
    // const yBody = props.body.pos.y;

    // console.log (`WB/HB/XB/YB: ${widthBody}/${heightBody}/${xBody}/${yBody}`)

    const color = props.color

    return (
        <View style = {{
            backgroundColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}/>
    )

}

export default (world: any, color: string, pos: any, size: any): any => {
  
    const initialObstacle: any = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: 'Obstacle',
            isStatic: true
        }
    )
    Matter.World.add(world, initialObstacle)

    return {
        body : initialObstacle,
        color,
        pos,
        renderer: <Obstacle/>
    }
}