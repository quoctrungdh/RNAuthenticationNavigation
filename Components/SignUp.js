import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SignUp extends Component {
  handleSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate("SignIn")
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

export default SignUp;
