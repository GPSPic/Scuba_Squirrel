import React from 'react'
import Matter from 'matter-js'

export default function Squirrel(world: any, color: string, pos: any, size: any): any {
  
    const initialSquirrel = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {label: 'Squirrel'}
    )
    Matter.World.add(world, initialSquirrel)
}
