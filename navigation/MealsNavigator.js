import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FilterScreen from '../screens/FiltersScreen';



const MealsNavigator = createStackNavigator({
      Categories: CategoriesScreen,
      CategoryMeals: {
         screen: CategoryMealScreen
      },
      MealDetail: MealDetailsScreen
});

const MealsFabTabNavigator =  createBottomTabNavigator({
    Meals:  MealsNavigator, 
    Favourites : FavouritesScreen
}, {
    tabBarOptions: {
        activeTintColor: '#ff7f50'
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
});

const MainNavigator = createDrawerNavigator({
    Meals : MealsFabTabNavigator,
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor: 'red'
    }
});


export default createAppContainer(MainNavigator);