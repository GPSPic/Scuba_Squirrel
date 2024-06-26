import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../game/entities';
import { useState, useEffect } from 'react';
import Physics from '../../game/utils/physics';
import AirManagement from '../../game/utils/airManagement';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { LinearGradient } from 'expo-linear-gradient';
import generic from '../../game/utils/generic';

export default function Game({navigation, running, route}: any) {
  const [gameEngine, setGameEngine] = useState(null)
  const [acornCount, setAcornCount] = useState(0)
  const [levelStreak, setLevelStreak] = useState(0)
  const [suitAir, setSuitAir] = useState(10);
  const [tankAir, setTankAir] = useState(232);

  const gameStop = route.params.stopGame;
  const updateBankedAcorn = route.params.increaseBankedAcorn;
  const bankedAcorn = route.params.bankedAcorn;
  let gameTimerID: any;

  const increaseStreakCount = (val: number) => {
    const newAcornCount: number = acornCount + val;
    setAcornCount(newAcornCount)
  }

  const dumpSuit = () => {
    const newAir: number = suitAir - 1;
    setSuitAir (newAir);
  }

  const fillSuit = () => {
    const newSuitAir: number = suitAir + 1;
    const newTankAir: number = tankAir - 1;
    setSuitAir (newSuitAir);
    setTankAir (newTankAir);
  }

  const breatheAir = () => {
    setTankAir (tankAir - 1);
  }

  const initialiseGameStart = () => {
    setSuitAir(10);
    setTankAir(232);
    setAcornCount(0);
  }

  useEffect(() => {
    gameTimerID = setInterval(() => breatheAir(), 5000);
    return () => clearInterval(gameTimerID);
  }, [tankAir]);


  // const lightColours = ['#00ffd0','#00ffea', '#00bfff']
  const lightColour = '#00ffd0'
  // const darkColours = ['#00303b', '#000001', '#00361d']
  const darkColour = '#00303b'
  // const lightColour = generic.getRandomValue(0,2)
  // const darkColour = generic.getRandomValue(0,2)

  return (
    <>
       <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
        <View style={styles.header}>
            <Header bankedAcorn = {bankedAcorn} navigation={navigation}/>
        </View>
        {/* <LinearGradient style = {styles.gameBackground} colors={[lightColours[lightColour], darkColours[darkColour]]}start={{x:1, y:0}}end={{x:1, y:1}}> */}
        <LinearGradient style = {styles.gameBackground} colors={[lightColour, darkColour]}start={{x:1, y:0}}end={{x:1, y:1}}>
          <View style={styles.content}>
            <GameEngine
              ref={(ref) => { setGameEngine(ref) }}
              systems={[Physics
                // , AirManagement(tankAir)
              ]}
              entities={entities(levelStreak, suitAir)}
              running = {running}

              onEvent = {(e:any) => {
                switch(e.type){
                  case 'game_over': 
                    // updateBankedAcorn(-acornCount);
                    gameStop();
                    setLevelStreak(0);
                    navigation.navigate("Death");
                    gameEngine.swap(entities(0, 10));
                    setTimeout(function() {
                      initialiseGameStart();
                    }, 0)
                    break;
                  case 'collect_acorn': 
                    increaseStreakCount(1)
                    break;
                  case 'breathe': 
                    breatheAir();
                    break;
                  case 'win_con':
                    updateBankedAcorn(acornCount);
                    gameStop();
                    setLevelStreak((prevLevelStreak) => prevLevelStreak + 1)
                    navigation.navigate('Win');
                    // gameEngine.stop();
                    setTimeout(function() {
                      initialiseGameStart();
                      gameEngine.swap(entities(levelStreak, suitAir));
                    }, 0); 
                    break;
                }
              }}
              style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,}}>
            </GameEngine>
            <StatusBar style="auto" hidden={true}/>
          </View> 
        </LinearGradient>
        <View style={styles.footer}>
          <Footer suitAir={suitAir} dumpSuit={dumpSuit} tankAir={tankAir} fillSuit={fillSuit}/>
        </View>
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
    gameBackground:{
      flex: 6,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    container:{
      flex:1,
    },
    footer:{
      flex: 1,
    },
  })