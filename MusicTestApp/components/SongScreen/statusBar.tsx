import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StatusBarComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backArrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuAndSearch}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="SEARCH"
            placeholderTextColor="#c7cbc5"
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={() => {}} style={styles.searchIcon}>
            <Icon name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.menuButton}>
            <Icon name="ellipsis-v" size={25} color="white" />
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    width: '100%'
  },
  backArrow: {
    padding: 10,
  },
  menuAndSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    flex: 1,
  },
  searchInput: {
    width: '70%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'black',
    paddingLeft: 10,
    borderRadius:30
  },
  menuButton: {
    padding: 10,
  },
  searchIcon: {
    padding: 10,
  },
});

export default StatusBarComponent;
