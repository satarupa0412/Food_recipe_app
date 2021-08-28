import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const FiltersScreen = props => {
    return (
        <View style = {styles.screen}>
            <Text>The Filter Screen!</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
       headerTitle : 'Filter Meals',
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
    }
});

export default FiltersScreen;