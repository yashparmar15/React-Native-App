 import React from 'react';
 import {Text , StyleSheet, View} from 'react-native';

 const ComponentScreen = () => {
    return (
        <View>
            <Text style = {styles.textStyle}>Hello ComponentScreen</Text>
            <Text>Hi there!</Text>
        </View>
    ); 
 };

 const styles = StyleSheet.create({
     textStyle : {
        fontSize : 30,
        backgroundColor : 'green'
     }
 })

 export default ComponentScreen;