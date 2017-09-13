import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { onSignOut } from '../auth';

class Profile extends Component {
  handleSignOut = () => {
    const { navigation } = this.props;
    onSignOut()
      .then(navigation.navigate('SignedOut'))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          onPress={this.handleSignOut}
          title="Sign out"
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

export default Profile;
