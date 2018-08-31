import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { ListOfFeaturedItems, ListOfShops, ListOfFreeItems } from '../Components/List';
import * as firebase from 'firebase';
import fire from '../Config/firebase';


class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: null
        }
    }
    componentWillMount() {
        console.log('test')
        firebase.database().ref('/users').once('value', (obj) => {
            this.setState({products: obj});
            console.log(this.state.products);
        });
    }
    render() {
        return (
            <ScrollView>
                <ListOfFeaturedItems />
                <ListOfShops />
                <ListOfFreeItems />
            </ScrollView>
        )
    }
}


export default MainScreen;

