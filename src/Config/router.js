import { createSwitchNavigator } from 'react-navigation';
import fire from './firebase';


import LoginScreen from '../Screens/LoginScreen';
import Loading from '../Components/Loading';
import MainScreen from '../Screens/MainScreen';



export const AuthFlow = createSwitchNavigator(
  {
    Loading: Loading,
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,

  },
  {
    initialRouteName: 'Loading',
  }
);

export default AuthFlow;
