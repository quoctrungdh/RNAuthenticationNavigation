GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SignedOut, SignedIn, createRootNavigator } from '../router';
import { isSignedIn } from '../auth';

class App extends Component {
  state = {
    isSignedIn: false,
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ isSignedIn: res }))
      .catch(err => err);
  }

  render() {
    const { isSignedIn } = this.state;

    const Layout = createRootNavigator(isSignedIn)
    return <Layout />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
