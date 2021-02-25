import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { AppRoute } from './app-routes';


const Stack = createStackNavigator();

export const AppNavigator = (props) => (
  <Stack.Navigator {...props} mode="modal" headerMode='none' screenOptions={{animationEnabled: true}}>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
  </Stack.Navigator>
);





  // AuthNavigator
    // Login 
    // Register
    // Main Navigator (only if logged in)