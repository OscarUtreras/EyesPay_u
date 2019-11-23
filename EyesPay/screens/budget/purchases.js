import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts'

const {width, height} = Dimensions.get('window')

export class Purchases extends Component {
  static navigationOptions = {
    headerTitle: 'Compras'
  };
  render() {
    const { params } = this.props.navigation.state;
    const budget = params ? params.budget : null;
    return (
        <View style={{ flexDirection:'row', marginVertical: '2%'}}>
            <View style={ styles.chart }>
                <ProgressCircle
                    style={ { height: height*0.095 } }
                    progress={ 0.7 }
                    progressColor={'rgb(134, 65, 244)'}
                />
            </View>
            <View style={ styles.information }>
                <Text style={{ fontWeight: 'bold' }}>{global.categories[budget.id_category-1].name}</Text>
                <Text>{budget.current + ' / ' + budget.max}</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    chart: {
        height: height*0.1,
        width: height*0.1,
        marginLeft: '1%'
    },
    information:{
        height: height*0.1,
        width: width-(height*0.11),
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default Purchases