import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const CaveCentre = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const color = props.color

  return (
    <View
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          borderRadius: widthBody/2,
          width: widthBody,
          height: heightBody,
          // backgroundColor: color,
          borderWidth:2,
        }}
      />   
  )
}

export default (world: any, color: string, pos: any, size: any): any => {
  
  const initialCaveCentre: any = Matter.Bodies.circle(
    pos.x,
    pos.y,
    size.radius,
    {
      label: 'Cave',
      isSensor: true,
      isStatic: true,
      restitution: 1
    }
  )
  Matter.World.add(world, initialCaveCentre)

  return {
    body : initialCaveCentre,
    color,
    pos,
    renderer: <CaveCentre/>
  }
}