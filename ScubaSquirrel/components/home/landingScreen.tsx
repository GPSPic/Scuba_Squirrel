import { StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingScreen({navigation, running}: any) {


  if (!running) {
  setTimeout(function() {
    navigation.navigate('Home')
  }, 3000);
  }

  const navigateHome = () => {
    navigation.navigate('Home');
  }

  return ( 
    <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
      <TouchableOpacity onPress={navigateHome}>  
        <View>
            <Image source={require('../../assets/ScubaSquirrelLogo.png')} style={styles.logo}/>
        </View>
        <View>
            <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.squirrel} />
        </View>
        </TouchableOpacity>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    marginTop: 50,
    alignItems: 'center',
    height:250,
    width:300
    },
  squirrel: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    marginBottom: 30
  },
})