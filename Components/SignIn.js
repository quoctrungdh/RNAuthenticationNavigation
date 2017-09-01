import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { onSignIn } from '../auth';

class SignIn extends Component {
  handleSignIn = () => {
    const { navigation } = this.props;
    onSignIn()
      .then(() => {
        navigation.navigate('SignedIn');
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleSignIn}
          title="Sign in"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SignIn;
