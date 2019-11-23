import React, { Component } from 'react';
import {Text, View, Dimensions, StyleSheet, ActivityIndicator, Button} from 'react-native';
//import {PieChart} from "react-native-chart-kit";


const {width, height} = Dimensions.get('window')

 export class BudgetExecution extends Component {
  static navigationOptions = {
    headerTitle: 'Presupuesto',
  };

  constructor(props){
    super(props);

    this.state = {
        loading: false,
        budgets: [],
        general_budget: [],
        error: null
    };
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    const url = global.url +'budgets/'+1;
    this.setState( {loading: true} );
    fetch(url)
    .then( res => res.json())
    .then( res => {
        this.setState({
            general_budget: res.splice(0,1)[0],
            budgets: res.splice(0, res.length),
            error: res.error || null,
            loading: false
        });
    })
    .catch(error => {
        this.setState({ error, loading:false });
        alert("Error")
    });
  };

  render() {
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5
    };
    if(this.state.loading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      
      <View style={styles.container}>
        <View style={styles.general}>
          
          <Text>{this.state.general_budget.current + ' / ' + this.state.general_budget.max}</Text>
          <Text>{global.categories[0].name}</Text>
        </View>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('BudgetDetail', {
              budgets: this.state.budgets
            });
          }}
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  columns: {
    width: width/2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  general: {
    margin: '1%',
    height: height*1.4/6,
    justifyContent: 'flex-end'
  },
  box: {
    marginVertical: '1%',
    marginHorizontal: '2%',
    height: height*0.75/6,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BudgetExecution