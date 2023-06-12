import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../game/entities';
import { useState, useEffect } from 'react';
import Physics from '../../game/utils/physics';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function Game() {
  const [running, setRunning] = useState(false)
  const [acornCount, setAcornCount]=useState(0)
  const [gameEngine, setGameEngine] = useState(null)

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <>
      <View style={{flex:1}}>
        <View style={styles.header}>
            <Header acornCount = {acornCount}/>
        </View>
        <LinearGradient style = {styles.background} colors={['#13def4', '#000000']}start={{x:1, y:0}}end={{x:1, y:1}}>
          <View style={styles.content}>
            <GameEngine
              ref={(ref) => { setGameEngine(ref) }}
              systems={[Physics]}
              entities={entities()}
              running = {running}
              onEvent = {(e:any) => {
                switch(e.type){
                  case 'game_over' : 
                  // setRunning(false);
                  setAcornCount(0);
                  // gameEngine.stop()
                  break;
                  case 'collect_acorn': 
                  setAcornCount((prevAcornCount) => prevAcornCount + 1)
                  gameEngine.swap(entities())
                  break;           
                }
              }}
              style={{position: 'relative', top: 0, left: 0, bottom: 0, right: 0,}}>
            </GameEngine>
            <StatusBar style="auto" hidden={true}/>
          </View> 
        </LinearGradient>
        <View style={styles.header}>
          <Header acornCount={acornCount}/>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    content:{
      flex: 1,
      border: 5,
      backgroundColor: 'rgba(0, 0, 0, 0)', 
    },
    header:{
      flex: 1,
    },
    background:{
      flex: 10,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }
  })