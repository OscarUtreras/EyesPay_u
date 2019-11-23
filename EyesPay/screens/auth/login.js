import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

global.url = 'http://localhost:3000/api/v1/'
global.categories = [];

export class Login extends Component {

  componentDidMount(){
    this.getCategories();
  }

  getCategories = () => {
    const url = global.url +'categories';
    this.setState( {loading: true} );
    fetch(url)
    .then( res => res.json())
    .then( res => {
        global.categories = res;
        this.setState({
            loading: false
        });
    })
    .catch(error => {
        this.setState({ error, loading:false });
        alert("Error categories, Login view")
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('BudgetExecution');
          }}>
          <Text>Ingresar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('NewAccount');
          }}>
          <Text>Crear Cuenta</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('RecoveryPassword');
          }}>
          <Text>¿Olvidó su contraseña?</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

export default Login