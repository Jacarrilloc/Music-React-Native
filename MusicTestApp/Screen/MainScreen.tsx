import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  const goToSongScreen = () => {
    navigation.navigate('SongScreen');
  };

  const goToListScreen = () => {
    navigation.navigate('ListScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Pantalla 1" onPress={goToSongScreen} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Pantalla 2" onPress={goToListScreen}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonContainer:{
    margin:10
  }
});
