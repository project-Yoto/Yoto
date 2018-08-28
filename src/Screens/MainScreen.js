import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import { Button, FormInput } from 'react-native-elements';

export default class MainScreen extends Component {
    //dummy data


    render() {
        return (
            // Three FlatList with horizontal scrolling
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text>MAIN SCREEN! NO MEANS YES!</Text>
            </View>
        )
    }
}

