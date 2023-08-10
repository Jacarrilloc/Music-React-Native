import React, { useState } from 'react';
import Song from '../components/Song';
import { StatusBar, View, StyleSheet  } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <Song/>
        <StatusBar/>
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