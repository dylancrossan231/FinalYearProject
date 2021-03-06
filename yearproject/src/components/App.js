/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducers from '../reducers';
// import NavigationController from './navigation/NavigationController';
import thunk from 'redux-thunk';


/**
 * Navigation dependencies & modules
 */
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from "./navigation_new/auth.navigator";


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);
// const store = createStore(reducers, applyMiddleware(thunk));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
