import { StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native'
import React from 'react'

export default function StartButton({ navigation }: any) {

  const gameRoute = () => {
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
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 15,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    height: 80,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'yellow',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
