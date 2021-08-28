import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MdStarBorder } from "react-icons/md";

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';


const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId'); 

    const selectedMeal = MEALS.find(meal => meal.id === mealId); 
    return (
        <View style = {styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title = "go back to categories"onPress = {() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId); 
    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title = "Favourite" onPress= { () => {} }/>
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;