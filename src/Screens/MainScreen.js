import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListOfFeaturedItems, ListOfShops, ListOfFreeItems } from '../Components/List';

export default class MainScreen extends Component {

    render() {
        return (
            <ScrollView>
                <ListOfFeaturedItems/>
                <ListOfShops/>
                <ListOfFreeItems/>
            </ScrollView>
        )
    }
}

