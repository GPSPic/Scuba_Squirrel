import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../game/entities';
import { useState, useEffect } from 'react';
import Physics from '../../game/utils/physics';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function Game({navigation, running, gameStop}: any) {
  const [gameEngine, setGameEngine] = useState(null)
  const [acornCount, setAcornCount]=useState(0)


  return (
    <>
       <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
        <View style={styles.header}>
            <Header acornCount = {acornCount}/>
        </View>
        <LinearGradient style = {styles.background} colors={['#13def4', '#08004c']}start={{x:1, y:0}}end={{x:1, y:1}}>
          <View style={styles.content}>
            <GameEngine
              ref={(ref) => { setGameEngine(ref) }}
              systems={[Physics]}
              entities={entities()}
              running = {running}
              onEvent = {(e:any) => {
                switch(e.type){
                  case 'game_over' : 
                  gameStop();
                  setAcornCount(0);
                  // gameEngine.stop()
                  break;
                  case 'collect_acorn': 
                  setAcornCount((prevAcornCount) => prevAcornCount + 1)
                  // gameEngine.swap(entities())
                  break;
                  case 'win_con':
                    // setBankedAcornCount
                    setAcornCount(0);
                    gameEngine.stop();
                    gameStop();
                    navigation.navigate('Win');
                    gameEngine.swap(entities());

                }
              }}
              style={{position: 'relative', top: 0, left: 0, bottom: 0, right: 0,}}>
            </GameEngine>
            <StatusBar style="auto" hidden={true}/>
          </View> 
        </LinearGradient>
        {/* <View style={styles.header}>
          <Header acornCount={acornCount}/>
        </View> */}
      </LinearGradient>
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
      flex: 6,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    container:{
      flex:1,
    },
  })