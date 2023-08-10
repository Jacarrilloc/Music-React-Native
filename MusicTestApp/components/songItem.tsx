import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItemSongListComponent = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  },
});

export default ItemSongListComponent;
