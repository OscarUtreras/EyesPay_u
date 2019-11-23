import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class RecoveryPassword extends Component {
  static navigationOptions = {
    headerTitle: 'Recuperar Contraseña'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Recuperar Contraseña</Text>
      </View>
    )
  }
}

export default RecoveryPassword