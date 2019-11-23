import 'react-native-gesture-handler'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './screens/auth/login'
import NewAccount from './screens/auth/newAccount'
import RecoveryPassword from './screens/auth/recoveryPassword'
import BudgetExecution from './screens/budget/budgetExecution'
import BudgetDetail from './screens/budget/budgetDetail'
import Purchases from './screens/budget/purchases'

const AuthStack = createStackNavigator({
  Login: {screen: Login},
  NewAccount: {screen: NewAccount},
  RecoveryPassword: {screen: RecoveryPassword}
},
{
  initialRouteName: "Login"
});
const BudgetStack = createStackNavigator({
  BudgetExecution: {screen: BudgetExecution},
  BudgetDetail: {screen: BudgetDetail},
  Purchases: {screen: Purchases }
},
{
  initialRouteName: "BudgetExecution"
});

const TabNavigator = createBottomTabNavigator({
  Presupuesto: BudgetStack
});

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: TabNavigator
  },
  {
    initialRouteName: 'Auth',
  }
));
