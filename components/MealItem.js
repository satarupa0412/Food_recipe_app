import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = props => {
    return (
        <View style = {styles.mealItem}>
        <TouchableOpacity onPress = {props.onSelectMeal}>
        <View >
            <View style = {{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source= {{uri: props.image}} style = {styles.bgImage}>
                    <View style = {styles.titleContainer}>
                         <Text style = {styles.title} numberOfLines = {1}>{props.title}</Text>
                </View>
                </ImageBackground>
            </View>
            <View style = {{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row' 
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 10

    },
    mealHeader : {
        height: '90%',

    },
    mealDetail : {
         paddingHorizontal: 10,
         justifyContent: 'space-between',
         alignItems: 'center',

    },
    bgImage : {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }


})

export default MealItem;