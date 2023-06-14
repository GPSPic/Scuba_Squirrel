import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'


const Cave = (props : any) => {
  const images = [require('../../assets/submarine2.png'),require('../../assets/submarine.png')];
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  
  const xBody = props.body.position.x - widthBody/2;
  const yBody = props.body.position.y - heightBody/2;
  const imageNumber: number = props.imageNumber;
  const color = props.color

  return (
    <View>
      <Image
        source={images[imageNumber]} // Replace with the correct path to the GIF image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          width: widthBody,
          height: heightBody,
          // backgroundColor: color,
        }}
        resizeMode='contain'
      />
    </View>    
  )
}

export default (world: any, color: string, pos: any, size: any, imageNumber: number): any => {
  
  const initialCave: any = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: 'CaveImage',
      isSensor: true,
      isStatic: true,
      restitution: 1
    }
  )
  Matter.World.add(world, initialCave)

  return {
    body : initialCave,
    color,
    pos,
    imageNumber,
    renderer: <Cave/>
  }
}