import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,TouchableHighlight } from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts'

const {width, height} = Dimensions.get('window')

export class BudgetDetail extends Component {
  static navigationOptions = {
    headerTitle: 'Presupuestos'
  };
  render() {
    const { params } = this.props.navigation.state;
    const budgets = params ? params.budgets : null;
    return (
        <View style={ styles.container}>
            <FlatList
                data={ budgets }
                renderItem={({ item }) => (
                <TouchableHighlight 
                style={ styles.button }
                onPress={() => {
                    this.props.navigation.navigate('Purchases', {
                      budget: item
                    });
                  }}
                > 
                    <View style={{ flexDirection:'row' }}>
                        <View style={ styles.chart }>
                            <ProgressCircle
                                style={ { height: height*0.095 } }
                                progress={ 0.7 }
                                progressColor={'rgb(134, 65, 244)'}
                            />
                        </View>
                        <View style={ styles.information }>
                            <Text style={{ fontWeight: 'bold' }}>{global.categories[item.id_category-1].name}</Text>
                            <Text>{item.current + ' / ' + item.max}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                )}
                keyExtractor = { (item, index) => index.toString() }
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        marginVertical: '1%'
    },
    button:{
        marginVertical: '1%'
    },
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

export default BudgetDetail