import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'


const Floor = (props : any) => {
    const imageURL = require('../../assets/SandBottom.png');
    const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color

    return (
        <View>
        <Image
          source={imageURL} // Replace with the correct path to the GIF image
          style={{
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,
          }}
        />
      </View> 
    )

}

export default (world: any, color: string, pos: any, size: any): any => {
  
    const initialFloor: any = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: 'Floor',
            isStatic: true,
            isSensor:true,
        }
    )
    Matter.World.add(world, initialFloor)

    return {
        body : initialFloor,
        color,
        pos,
        renderer: <Floor/>
    }
}