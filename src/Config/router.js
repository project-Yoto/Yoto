import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import fire from './firebase';


import LoginScreen from '../Screens/LoginScreen';
import Loading from '../Components/Loading';
import MainScreen from '../Screens/MainScreen';
import ShopScreen from '../Screens/ShopScreen';
import MyProfileScreen from '../Screens/MyProfileScreen';

const MainScreenStack = createStackNavigator({
  Main: MainScreen,
  //productScreen: productScreen
  //storeScreen: storeScree 
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
)

const Tabs = createBottomTabNavigator({
  Main: MainScreenStack,
  Shop: ShopScreen,
  Profile: MyProfileScreen
})

const AuthFlow = createSwitchNavigator(
  {
    Loading: Loading,
    LoginScreen: LoginScreen,
    MainScreen: Tabs,

  },
  {
    initialRouteName: 'Loading',
  }
);

export default AuthFlow;
