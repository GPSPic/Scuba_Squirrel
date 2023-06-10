import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/home/Home';
import About from './components/staticPages/About';
import Game from './components/gameComponent/Game';



export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <StatusBar style="auto" />
        <AppContainer />
      </View> */}
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
