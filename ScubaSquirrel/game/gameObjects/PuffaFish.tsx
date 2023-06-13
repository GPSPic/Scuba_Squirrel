import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const PuffaFish = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const color = props.color
  const imageNumber = props.imageNumber;


  const Image1 = require('../../assets/fish/jellyfish.png')
  const Image2 = require('../../assets/fish/puffafish.png')
  const images = [Image1, Image2]

  return (
    <View>
      <Image
        source={images[imageNumber]} // Replace with the correct path to the GIF image
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

export default (world: any, color: string, pos: any, size: any, imageNumber: number): any => {
  
  const initialPuffaFish: any = Matter.Bodies.circle(
    pos.x,
    pos.y,
    size.radius,
    {
      label: 'PuffaFish',
      restitution: 1,
    },
  )
  
  Matter.World.add(world, initialPuffaFish)

  return {
    body : initialPuffaFish,
    color,
    pos,
    imageNumber,
    renderer: <PuffaFish/>
  }
}