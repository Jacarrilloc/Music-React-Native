import React from 'react';
import { StatusBar, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Song from '../components/SongScreen/Song';
import Navbar from '../components/SongScreen/statusBar';
import AlbunImage from '../components/SongScreen/Albun';

export default function SongScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : StatusBar.currentHeight} 
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <Navbar />
        <View style={styles.songContainer}>
          <View style={styles.songContent}>
            <Song />
          </View>
          <View style={styles.albumImageContainer}>
            <AlbunImage />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#442e4d',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
