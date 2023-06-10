import { StyleSheet, View, Image} from 'react-native'
import React from 'react'

export default function LandingScreen() {
  return ( 
      <View style={styles.container}>
        <View>
            <Image source={require('../../assets/ScubaSquirrelLogo.png')} style={styles.logo} />
        </View>
      <View>
          <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.squirrel} />
      </View>
      </View>
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