import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <FormLabel>Login with email</FormLabel>
        <FormInput />
        <Button
          style={{ marginTop: 20 }}
          title='LOGIN' 
          onPress={() => this.props.navigation.navigate('MainScreen')}
          />
          
        <Button
          style={{ marginTop: 20 }}
          title='SIGN UP' />
      </View>
    )
  }
}