import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { shopList, itemList} from '../Components/List';
import { Button, FormInput } from 'react-native-elements';


export default class MainScreen extends Component {

    render() {
        return (
            // Three FlatList with horizontal scrolling
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <itemList/>
            <shopList/>

            </View>
        )
    }
}

