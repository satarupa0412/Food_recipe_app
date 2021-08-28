import React from 'react';
import {Button} from 'react-native';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {
    const renderGridItems = (itemData) => {
        return (
           <CategoryGridTile title = {itemData.item.title} color = {itemData.item.color} onSelect = { () =>
               props.navigation.navigate({routeName: 'CategoryMeals', params : {categoryId : itemData.item.id} }
               )}/>
        );
    }; 
    return (
        <FlatList 
        data = {CATEGORIES} 
        renderItem = {renderGridItems} numColumns = {2}/>
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
       headerTitle : 'Meals Categories',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
   
});

export default CategoriesScreen;