import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Navbar2 from '../components/statusBarModel2';
import ListItem from '../components/songItem';

const ListScreen = () => {
  return (
    <View style={styles.container}>
        <Navbar2 />
        <ListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }
});

export default ListScreen;
