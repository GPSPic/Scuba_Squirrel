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

const [running, setRunning] = useState(false)

const gameReload = () => {
  setRunning(true);
  console.log(`hello!! - reloading game`);
}

const gameStop =() => {
  console.log(`hello!! - stopping game`);
  setRunning(false);
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
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="Home" component={Home} initialParams={{reloadGame: gameReload}}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Tutorial" component={Tutorial}/>
        <Stack.Screen name="Game" component={Game} initialParams={{running, stopGame: gameStop}}/>
        <Stack.Screen name="Death" component={Death} initialParams={{reloadGame: gameReload}}/>
        <Stack.Screen name="Win" component={Win} initialParams={{reloadGame: gameReload}}/>
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
