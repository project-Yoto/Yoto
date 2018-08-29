import React, { Component } from 'react';
import { Flatlist, Text, StyleSheet } from 'react-native';

const listData = [
    { itemName: "spoon", itemPrice: 2 },
    { itemName: "a picture of Scott", itemPrice: 200000000000 },
    { itemName: "cup", itemPrice: 20 },
    { itemName: "diamond", itemPrice: 200000 }
];

const shopList = [
    { shopName: "coco", shopOwner: "Bob" },
    { shopName: "caca", shopOwner: "Knob" },
    { shopName: "cucu", shopOwner: "Rob" },
    { shopName: "cici", shopOwner: "Tob" }
];



const itemList = () => (
    <View style={styles.list}>
        <Text>List of Items</Text>
        <Flatlist data={listData} renderItem={({ item }) => <Text>{item.itemName}</Text>} />
        <Text>View all</Text>
    </View>
);

const shopList = () => (
    <View style={styles.list}>
        <Text>List of Shops</Text>
        <Flatlist data={shopList} horizontal renderItem={({ item }) => <Text>{item.shopName}</Text>} />
        <Text>View all</Text>
    </View>
);

const styles = StyleSheet.create({
    list: {
        height: 20,
        borderWidth: 2, 
    }
})



export { itemList, shopList };
