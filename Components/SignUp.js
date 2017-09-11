import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

import { API_URL } from '../constants';

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSignUp = () => {
    const { username, password } = this.state;
    fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  handleSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate("SignIn")
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          autoCapitalize='none'
          placeholder="Please enter username"
          onChange={this.handleInputChange}
          onChangeText={(username) => this.setState({ username })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          placeholder="Please enter password"
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          raised
          onPress={this.handleSignUp}
          title="Sign up"
        />
        <Button
          raised
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

export default SignUp;
