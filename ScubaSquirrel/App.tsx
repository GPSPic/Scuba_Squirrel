import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './components/home/Home';
import About from './components/staticPages/About';
import Game from './components/gameComponent/Game';
import Death from './components/staticPages/Death';
import LandingScreen from './components/home/landingScreen';
import Tutorial from './components/staticPages/Tutorial';
import Win from './components/staticPages/Win';
import Menu from './components/staticPages/menu';


export default function App() {

const [running, setRunning] = useState(false);
const [bankedAcorn, setBankedAcorn] = useState(0);

const gameReload = () => {
  setRunning(true);
}

const gameStop =() => {
  setRunning(false);
}

const addBankedAcorn = (acornCount: number) => {
  const newCount = bankedAcorn + acornCount;
  setBankedAcorn(newCount);
}


const Stack = createNativeStackNavigator();
const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

console.log(`App: width: ${screenWidth}, height: ${screenHeight}`)

  return (
    <NavigationContainer>
      <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
      <Stack.Navigator initialRouteName='LandingScreen'
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} initialParams={{running}}/>
        <Stack.Screen name="Home" component={Home} initialParams={{reloadGame: gameReload, bankedAcorn}}/>
        <Stack.Screen name="About" component={About} initialParams={{bankedAcorn}}/>
        <Stack.Screen name="Tutorial" component={Tutorial} initialParams={{bankedAcorn}}/>
        <Stack.Screen name="Game" component={Game} initialParams={{running, bankedAcorn, stopGame: gameStop, increaseBankedAcorn: addBankedAcorn}}/>
        <Stack.Screen name="Death" component={Death} initialParams={{reloadGame: gameReload, bankedAcorn}}/>
        <Stack.Screen name="Win" component={Win} initialParams={{reloadGame: gameReload, bankedAcorn}}/>
        <Stack.Screen name="MenuPage" component={Menu}/>
      </Stack.Navigator> 
      </LinearGradient>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
