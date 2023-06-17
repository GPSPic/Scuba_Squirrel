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


  const images = [require('../../assets/fish/bluefish.png'), 
                  require('../../assets/fish/blueyellowfish.png'),
                  require('../../assets/fish/pinkfish.png'),
                  require('../../assets/fish/yellowfish.png'),
                  require('../../assets/fish/exoticfish1.png'),
                  require('../../assets/fish/exoticfish2.png'),
                  require('../../assets/fish/exoticfish3.png'),
                  require('../../assets/fish/exoticfish4.png'),
                  require('../../assets/fish/exoticfish5.png')
                ];


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
        resizeMode='contain'
      />
   </View>
  )
}

export default (world: any, color: string, pos: any, size: any, imageNumber: number, direction:number): any => {


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
      collisionFilter: {
        category: 0x0002, 
        mask: 0x0001, 
      }
    },
  )
  Matter.World.add(world, initialRegularFish)
  return {
    body : initialRegularFish,
    color,
    pos,
    imageNumber,
    direction,
    renderer: <RegularFish/>
  }
}