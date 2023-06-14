import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const JellyFish = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const color = props.color
  const imageNumber = props.imageNumber;


  const imageURLs = [require('../../assets/fish/jellyfish.png'),
                     require('../../assets/fish/jellyfish2.png')]
  
  return (
    <View>
      <Image
        source={imageURLs[imageNumber]} // Replace with the correct path to the GIF image
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
  
  const initialJellyFish: any = Matter.Bodies.circle(
    pos.x,
    pos.y,
    size.radius,
    {
      label: 'JellyFish',
      restitution: 1,
      isSensor: true,
    },
  )
  
  Matter.World.add(world, initialJellyFish)

  return {
    body : initialJellyFish,
    color,
    pos,
    imageNumber,
    renderer: <JellyFish/>
  }
}