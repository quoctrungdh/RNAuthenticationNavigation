/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './Components/App'

export default class RNAuthenticationNavigation extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RNAuthenticationNavigation', () => RNAuthenticationNavigation);
