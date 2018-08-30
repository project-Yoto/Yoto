import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { listData, shopList} from '../Config/dummyData'


//List of items
const ListOfFeaturedItems =() => (
    <View style={styles.list}>
        <Text style={styles.text}>List of Items</Text>
        <FlatList data={listData} horizontal renderItem={({ item }) => <ItemOfMainList {...item} />} keyExtractor={(item) => item.itemName} />
        <Text style={styles.text}>See more</Text>
    </View> 
)

const ListOfFreeItems =() => (
    <View style={styles.list}>
        <Text style={styles.text}>List of free Items</Text>
        <FlatList data={listData} horizontal renderItem={({ item }) => <ItemOfMainList {...item}/>} keyExtractor={(item) => item.itemName} />
        <Text style={styles.text}>See more</Text>
    </View> 
)


const ListOfShops = () => (
    <View style={styles.list} >
        <Text style={styles.text}>List of Shops</Text>
        <FlatList data={shopList} horizontal renderItem={({ item }) => <ShopOfMainList {...item} />} keyExtractor={(item) => item.shopName} />
        <Text style={styles.text}>See more</Text>
    </View>
)

//item element in List
class ItemOfMainList extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text>{this.props.itemName}</Text>
                <Image
                    style={{ width: 100, height: 130 }}
                    source={require('/home/torof/desk/Project_Yoto/Yoto/src/Assets/pictures/regency-flatware-dessert-spoon-12-pack.jpg')}
                />
            </View>
        );
    }
}

//shop element in list
class ShopOfMainList extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text>{this.props.shopName}</Text>
                <Text>{this.props.shopOwner}</Text>
            </View>
        );
    }
}






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
        borderRadius: 10,
    }
})
