import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/MainScreen';
import SongScreen from './Screen/SongScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SongScreen" component={SongScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
