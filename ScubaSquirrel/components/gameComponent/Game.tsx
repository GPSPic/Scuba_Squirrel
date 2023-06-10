import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../game/entities';
import { useState, useEffect } from 'react';
import Physics from '../../game/utils/physics';
import Header from '../header/Header';
import Gear from '../gear/Gear';

export default function Game() {

  const [running, setRunning] = useState(false)
  const [currentAir, setCurrentAir] = useState(3000)

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <>
    <View style={styles.header}>
        <Header />
    </View>
    <View style={styles.content}>
      <GameEngine
        systems={[Physics]}
        entities={entities()}
        running = {running}
        style={{position: 'absolute', top: 0, left: 0, bottom: 100, right: 0, overflow: 'hidden'}}
      >
      </GameEngine>
    <StatusBar style="auto" hidden={true}/>
    </View> 
    <View style={{flex:1}}>
      <Gear currentAir={currentAir}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    content:{
      flex: 10,
      border: 5,
      backgroundColor: "darkturquoise" 
    },
    header:{
      flex: 1,
    }
  })

