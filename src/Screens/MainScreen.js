import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import { Button, FormInput } from 'react-native-elements';

export default class MainScreen extends Component {
    //dummy data


    render() {
        return (
            // Three FlatList with horizontal scrolling
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <FormInput defaultValue="WRITE SOMETHING" />
                <Button style={{width: 500, marginTop: 15}} title="something" />
                <Button
                    large
                    title='LARGEll' />
            </View>
        )
    }
}

