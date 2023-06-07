import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import { useState, useEffect } from 'react';
import Physics from './utils/physics';

export default function App() {
  const imageURL = require('./assets/seaBackground.png');
  const [running, setRunning] = useState(false)
  const [gameEngineTop, setGameEngineTop] = useState(0)

  useEffect(() => {
    setRunning(true)
  }, [])

  // useEffect(()=> {
  //   const interval = setInterval(()=>{
  //     console.log(`${entities().Squirrel.body.left}`)
  //   },500)
  //   return () => {clearInterval(interval)}
  // },[])

  // const handleClickToStart = () => {
  //   setRunning(true)
  // }
  return (
    <>

    <View style={{flex: 1, overflow: 'hidden'}}>
      <ImageBackground source={imageURL} style={{flex: 1, justifyContent: 'center', height: '100%', width: '100%'}}>
    {/* <View> */}
    {/* <TouchableOpacity onPress={handleClickToStart} /> */}
      <GameEngine
      systems={[Physics]}
      entities={entities()}
      running = {running}
      style={{position: 'relative', top: 0, left: 0, bottom: 300, right: 500, overflow: 'hidden'}}
      >

      </GameEngine>
        <StatusBar style="auto" hidden={true}/>
        </ImageBackground>
    </View> 
    {/* <View style={{flex:1}}><Text>This is text</Text></View> */}
    </>
  );
}
