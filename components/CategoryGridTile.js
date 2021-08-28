import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryMealScreen from '../screens/CategoryMealScreen';


const CategoryGridTile = props =>{
    return (
        <TouchableOpacity style = {styles.gridItem} onPress = {props.onSelect}>
            <View style = {{ ...styles.container, ... {backgroundColor: props.color}}}>
              <Text style = {styles.title}>{props.title}</Text>
           </View>
        </TouchableOpacity>
    );
};




const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container : {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title : {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right'
    }
});

export default CategoryGridTile;