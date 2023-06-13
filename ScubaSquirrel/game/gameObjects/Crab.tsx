import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const Crab = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const color = props.color


  const imageURL = require('../../assets/fish/crab2.png')
  
  return (
    <View>
      <Image
        source={imageURL} // Replace with the correct path to the GIF image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          borderRadius: widthBody/2,
          width: widthBody,
          height: heightBody,
          // backgroundColor: color,
        }}
      />
   </View>
  )
}

export default (world: any, color: string, pos: any, size: any): any => {
  
  const initialCrab: any = Matter.Bodies.circle(
    pos.x,
    pos.y,
    size.radius,
    {
      label: 'Crab',
      restitution: 1,
      isSensor: true,
    },
  )
  
  Matter.World.add(world, initialCrab)

  return {
    body : initialCrab,
    color,
    pos,
    renderer: <Crab/>
  }
}