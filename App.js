/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PhotoList from './screens/PhotoList.js'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PhotoList
  }
});

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}