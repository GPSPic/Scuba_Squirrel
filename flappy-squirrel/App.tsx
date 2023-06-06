import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import { useState, useEffect } from 'react';
import Physics from './utils/physics';

export default function App() {
  const [running, setRunning] = useState(false)
  useEffect(() => {
    setRunning(true)
  }, [])
  return (
    <>
    <View style={{flex: 10, overflow: 'hidden'}}>
    {/* <View> */}
      <GameEngine
      systems={[Physics]}
      entities={entities()}
      running = {running}
      style={{position: 'relative', top: 0, left: 0, bottom: 0, right: 0,}}
      >

      </GameEngine>
        <StatusBar style="auto" hidden={true}/>
    </View> 
    {/* <View style={{flex:1}}><Text>This is text</Text></View> */}
    </>
  );
}
