import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SongScreen from './components/Song';

export default function App() {
  return (
    <View style={styles.container}>
      <SongScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#442e4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
