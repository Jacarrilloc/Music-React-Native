import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { HeaderBackButton } from '@react-navigation/elements'; 
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

      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="ellipsis-v" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 15,
    width: '100%',
  },
  backArrow: {
    padding: 10, 
  },
  menuButton: {
    padding: 15,
    alignItems: 'flex-end' 
  },
});

export default StatusBarComponent;
