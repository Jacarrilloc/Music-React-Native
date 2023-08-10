import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Song from '../components/Song';
import Navbar from '../components/statusBar';

export default function SongScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.songContainer}>
        <Song />
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#442e4d',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  songContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
