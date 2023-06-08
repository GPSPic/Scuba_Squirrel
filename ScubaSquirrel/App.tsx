import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './container/AppContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppContainer />
    </View>
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
