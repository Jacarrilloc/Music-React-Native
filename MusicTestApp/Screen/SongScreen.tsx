import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Song from '../components/SongScreen/Song';
import Navbar from '../components/SongScreen/statusBar';
import AlbunImage from '../components/SongScreen/Albun';

export default function SongScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.songContainer}>
        <View style={styles.songContent}>
          <Song />
        </View>
        <View style={styles.albumImageContainer}>
          <AlbunImage />
        </View>
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
  },
  songContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  albumImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  songContent: {
    flex: 1,
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
