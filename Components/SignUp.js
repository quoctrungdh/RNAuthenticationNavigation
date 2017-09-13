import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

import { API_URL, HEADERS } from '../constants';
import { onSignIn } from '../auth';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    isLoadingIndicatorShow: false
  }

  handleSignInSuccess = ({success, token}) => {
    if (!success) return;
    const { navigation } = this.props;
    onSignIn(token)
      .then(() => {
        navigation.navigate("SignedIn")
        this.setState({
          isLoadingIndicatorShow: false
        })
      })
  }

  handleSignIn = () => {
    this.setState({
      isLoadingIndicatorShow: true
    })
    fetch(`${API_URL}/login`, {
			method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(this.handleSignInSuccess)
    .catch(err => err)
    // TODO: handle login error
  }

  render() {
    const { isLoadingIndicatorShow } = this.state;
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
          onPress={this.handleSignIn}
          title="Sign in"
        />
        {
          isLoadingIndicatorShow &&
          <ActivityIndicator />
        }
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
