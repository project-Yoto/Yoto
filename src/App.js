import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthFlow from './Config/router';
import LoginScreen from './Screens/LoginScreen';


export default class Root extends React.Component {
  render() {
    return (
      <AuthFlow />
    );
  }
}


