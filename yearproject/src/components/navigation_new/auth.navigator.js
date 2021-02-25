import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import { routes } from "./app-routes";
import { connect } from "react-redux";
import loginScreen from "../loginScreen";
import AddPerson from '../AddPerson';
import * as actions from '../../actions';
import {MainNavigator} from './main.navigator';
import {AuthTabNavigator} from './authTab.navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Auth = (props) => {
  
  return (
    <Stack.Navigator headerMode="none" screenOptions={{animationEnabled: true}}>
      {!props.token || props.token == '' ? (
        <>
          <Stack.Screen name={routes.SIGN_IN} component={loginScreen} />
          <Stack.Screen name={routes.SIGN_UP} component={AddPerson} />
        </>
      ) : (
        <>
          <Stack.Screen name={routes.MAIN} component={MainNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const { token } = state.people;
  

  return { token };
};

const AuthNavigator = connect(mapStateToProps, actions)(Auth);

export { AuthNavigator };
