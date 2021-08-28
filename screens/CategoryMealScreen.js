import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealScreen = props => {
     
   

     const catId = props.navigation.getParam('categoryId');

     const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
       <MealList listData = {displayedMeals} navigation = {props.navigation} />
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
         headerTitle : selectedCategory.title
    };
}

const styles = StyleSheet.create({
   
});

export default CategoryMealScreen;