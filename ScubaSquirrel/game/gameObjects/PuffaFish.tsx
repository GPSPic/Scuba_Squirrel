import React from 'react'
import Matter from 'matter-js'
import { View } from 'react-native'

const PuffaFish = (props : any) => {
    const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;
    const color = props.color

    return (
        <View style = {{
            borderWidth:1,
            borderColor:color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            borderRadius: widthBody/2,
            width: widthBody,
            height: heightBody
        }}/>
    )
}

export default (world: any, color: string, pos: any, size: any): any => {
  
    const initialPuffaFish: any = Matter.Bodies.circle(
        pos.x,
        pos.y,
        size.radius,
        {
            label: 'PuffaFish',
            restitution: 1,
            // isStatic: tfalserue,
        },
    )
    Matter.World.add(world, initialPuffaFish)

    return {
        body : initialPuffaFish,
        color,
        pos,
        renderer: <PuffaFish/>
    }
}