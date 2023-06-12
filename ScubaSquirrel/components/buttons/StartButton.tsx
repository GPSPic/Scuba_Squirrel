import { StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native'
import React from 'react'

export default function StartButton({ navigation, gameReload }: any) {

  const gameRoute = () => {
    gameReload();
    console.log(`called Game Reload`);
    navigation.navigate("Game");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={gameRoute}>
      <Text style={styles.buttonText}>PLAY</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 5,
    borderColor: '#feee00',
    borderRadius: 20,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 300,
    height: 100,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#feee00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
