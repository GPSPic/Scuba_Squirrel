import { StyleSheet, Text, TouchableOpacity, View , Button, Image} from 'react-native'
import React from 'react'

export default function StartButton({ navigation, gameReload }: any) {

  const gameRoute = () => {
    gameReload();
    console.log(`called Game Reload`);
    navigation.navigate("Game");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={gameRoute}>
      <Image source={require('../../assets/PlayButton.png')} style={styles.image} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: '#feee00',
    borderRadius: 25,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:150,
    height:40,
    backgroundColor: 'transparent',
  },
});
