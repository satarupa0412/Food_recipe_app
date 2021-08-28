import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';


const FavouritesScreen = props => {
   
   const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList listData = {favMeals} navigation = {props.navigation} style = {{marginTop: 10}}/>
    );
};

FavouritesScreen.navigationOptions = navData => {
    return {
       headerTitle : 'Your Favourites',
       headerLeft: () => ( <View style={{paddingLeft: 10}}>
             <Button
               title= "Menu"
               color="#ff6347"
               onPress = { () => {
                   navData.navigation.toggleDrawer();
               }}
            />
                         </View>
        )
   };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouritesScreen;