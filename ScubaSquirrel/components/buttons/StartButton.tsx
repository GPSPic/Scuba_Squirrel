import { StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native'
import React from 'react'

export default function StartButton({ navigation }: any) {

  const gameRoute = () => {
    navigation.navigate("Game");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={gameRoute}>
      <Text style={styles.buttonText}>Play</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 10,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
