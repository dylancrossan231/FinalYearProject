import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddWorkout from '../AddWorkout';

const StackNavigator = createStackNavigator();

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="AddWorkout" component={AddWorkout} />
  </Stack.Navigator>
</NavigationContainer>;

export default createAppContainer(StackNavigator);
