import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class NewAccount extends Component {
  static navigationOptions = {
    headerTitle: 'Nueva Cuenta'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nueva Cuenta</Text>
      </View>
    )
  }
}

export default NewAccount