import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function MenuButton({navigation}: any) {

  const menuRoute = () => {
    navigation.navigate("MenuPage");
}
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={menuRoute}>
        <Image source={require('../../assets/MenuIcon.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#feee00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
},
  button: {
    // borderWidth: 3,
    // borderColor: '#feee00',
    // borderRadius: 20,
    backgroundColor: 'transparent',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // width: 30,
    // height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:40,
    height:30,
    backgroundColor: 'transparent',
  },
})