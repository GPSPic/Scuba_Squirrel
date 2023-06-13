import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const RegularFish = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const color = props.color
  const imageNumber = props.imageNumber;


  const Image1 = require('../../assets/fish/bluefish.png')
  const Image2 = require('../../assets/fish/blueyellowfish.png')
  const Image3 = require('../../assets/fish/pinkfish.png')
  const Image4 = require('../../assets/fish/yellowfish.png')
  const images = [Image1, Image2, Image3, Image4]



  return (
    <View>
      <Image
        source={images[imageNumber]} // Replace with the correct path to the GIF image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          // borderRadius: widthBody/2,
          width: widthBody,
          height: heightBody,
        }}
      />
   </View>
  )
}

export default (world: any, color: string, pos: any, size: any, imageNumber: number): any => {


  const initialRegularFish: any = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    // size.radius,
    size.width,
    size.height,
    {
      label: 'RegularFish',
      restitution: 1,
      density:100,
      mass:150,
    },
  )
  Matter.World.add(world, initialRegularFish)
  return {
    body : initialRegularFish,
    color,
    pos,
    imageNumber,
    renderer: <RegularFish/>
  }
}