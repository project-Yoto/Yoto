import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';


//Dummy data
const listData = [
    { itemName: "spoon", itemPrice: 2 },
    { itemName: "a picture of Scott", itemPrice: 200000000000 },
    { itemName: "cup", itemPrice: 20 },
    { itemName: "diamond1", itemPrice: 200000 },
    { itemName: "diamond2", itemPrice: 200000 },
    { itemName: "diamond3", itemPrice: 200000 },
    { itemName: "diamond4", itemPrice: 200000 },
    { itemName: "diamond5", itemPrice: 200000 },
    { itemName: "diamond6", itemPrice: 200000 },
    { itemName: "diamond7", itemPrice: 200000 },
    { itemName: "diamond8", itemPrice: 200000 },
    { itemName: "diamond9", itemPrice: 200000 }
];

const shopList = [
    { shopName: "coco", shopOwner: "Bob" },
    { shopName: "caca", shopOwner: "Knob" },
    { shopName: "cucu", shopOwner: "Rob" },
    { shopName: "cici", shopOwner: "Tob" }
];

//List of items
const ListOfFeaturedItems =() => (
    <View style={styles.list}>
        <Text style={styles.text}>List of Items</Text>
        <FlatList data={listData} horizontal renderItem={({ item }) => (<View style={styles.view}><Text>{item.itemName}</Text></View>)} keyExtractor={(item) => item.itemName} />
        <Text style={styles.text}>View all</Text>
    </View> 
)

const ListOfFreeItems =() => (
    <View style={styles.list}>
        <Text style={styles.text}>List of free Items</Text>
        <FlatList data={listData} horizontal renderItem={({ item }) => (<View style={styles.view}><Text>{item.itemName}</Text></View>)} keyExtractor={(item) => item.itemName} />
        <Text style={styles.text}>View all</Text>
    </View> 
)

//List of shops
const ListOfShops = () => (
    <View style={styles.list} >
        <Text style={styles.text}>List of Shops</Text>
        <FlatList data={shopList} horizontal renderItem={({ item }) => (<View style={styles.view}><Text >{item.shopName}</Text></View>)} keyExtractor={(item) => item.shopName} />
        <Text style={styles.text}>View all</Text>
    </View>
)




export { ListOfFeaturedItems, ListOfShops, ListOfFreeItems };

const styles = StyleSheet.create({
    list: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 10,
        height: 200,
    },
    text:{
        textAlign: "center"
    },
    view:{
        marginLeft: 5,
        borderWidth: 1,
        padding: 2,
    }
})
