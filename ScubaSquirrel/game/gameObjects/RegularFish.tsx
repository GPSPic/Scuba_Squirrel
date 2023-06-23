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
  const direction = props.direction;


  const LeftImages = [require('../../assets/fish/bluefishL.png'), 
                  require('../../assets/fish/blueyellowfishL.png'),
                  require('../../assets/fish/pinkfishL.png'),
                  require('../../assets/fish/yellowfishL.png'),
                  require('../../assets/fish/exoticfish1L.png'),
                  require('../../assets/fish/exoticfish2L.png'),
                  require('../../assets/fish/exoticfish3L.png'),
                  require('../../assets/fish/exoticfish4L.png'),
                  require('../../assets/fish/exoticfish5L.png')
                ];
  const RightImages = [require('../../assets/fish/bluefishR.png'), 
                  require('../../assets/fish/blueyellowfishR.png'),
                  require('../../assets/fish/pinkfishR.png'),
                  require('../../assets/fish/yellowfishR.png'),
                  require('../../assets/fish/exoticfish1R.png'),
                  require('../../assets/fish/exoticfish2R.png'),
                  require('../../assets/fish/exoticfish3R.png'),
                  require('../../assets/fish/exoticfish4R.png'),
                  require('../../assets/fish/exoticfish5R.png')
                ];

  const imageToUse = (direction < 0 ? LeftImages[imageNumber] : RightImages[imageNumber])             

  return (
    <View>
      <Image
        source={imageToUse} // Replace with the correct path to the GIF image
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