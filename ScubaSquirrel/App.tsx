import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './components/home/Home';
import About from './components/staticPages/About';
import Game from './components/gameComponent/Game';
import Header from './components/header/Header';
import LandingScreen from './components/home/landingScreen';


export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
      <Header/>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Game" component={Game}/>
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
