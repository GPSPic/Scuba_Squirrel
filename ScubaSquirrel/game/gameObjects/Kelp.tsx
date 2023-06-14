import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'
const imageURLs = [require('../../assets/seaweed/kelp2.png'),
                   require('../../assets/seaweed/kelp3.png'),
                   require('../../assets/seaweed/kelp4.png'),
                   require('../../assets/seaweed/kelp5.png'),
                   require('../../assets/seaweed/seaweed1.png'),
                   require('../../assets/seaweed/seaweed2.png'),
                   require('../../assets/seaweed/seaweed3.png'),
                   require('../../assets/seaweed/seaweed4.png'),
                   require('../../assets/seaweed/seaweed5.png'),
                  ];

const Kelp = (props : any) => {
  const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y
  const xBody = props.body.position.x-widthBody/2; 
  const yBody = props.body.position.y-heightBody/2;
  const imageNumber = props.imageNumber;
  const color = props.color

  return (
    <View>
      <Image
        source={imageURLs[imageNumber]} // Replace with the correct path to the GIF image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          width: widthBody,
          height: heightBody,
          // backgroundColor: 'green'
        }}
        resizeMode='contain'
      />
    </View>      
  )
}

export default (world: any, color: string, pos: any, size: any, imageNumber: number): any => {
  
  const initialKelp: any = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: 'Kelp',
      isStatic: true,
      isSensor: true,
      restitution: 1,
    }
  )

  Matter.World.add(world, initialKelp)

  return {
    body : initialKelp,
    color,
    pos,
    imageNumber,
    renderer: <Kelp/>
  }
}