import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const Seahorse = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const color = props.color

  const imageURL = require('../../assets/seahorse.png');
                 
  return (
    <View>
      <Image
        source={imageURL} // Replace with the correct path to the GIF image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          // borderRadius: widthBody/2,
          width: widthBody,
          height: heightBody,
        }}
        resizeMode='contain'
      />
   </View>
  )
}

export default (world: any, color: string, pos: any, size: any): any => {


  const initialSeahorse: any = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    // size.radius,
    size.width,
    size.height,
    {
      label: 'Seahorse',
      restitution: 1,
      density:100,
      mass:150,
    },
  )
  Matter.World.add(world, initialSeahorse)
  return {
    body : initialSeahorse,
    color,
    pos,
    renderer: <Seahorse/>
  }
}