import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { ListOfFeaturedItems, ListOfShops, ListOfFreeItems } from '../Components/List';
import { connect } from 'react-redux';

function MainScreen(props) {
    return (
        <ScrollView>
            <ListOfFeaturedItems count={props.count} />
            {/*             <ListOfShops />
            <ListOfFreeItems /> */}
        </ScrollView>
    )
}

function mapStateToProps(state) {
    return {
        //Testing redux
        count: state.count
    }
}


export default connect(mapStateToProps)(MainScreen);

