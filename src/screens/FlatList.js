import React from 'react';

import {FlatList ,View , StyleSheet , Text} from 'react-native';

const flatList = () =>{
    const friends = [
        {name : "Friend 1" , age : 20},
        {name : "Friend 2" , age : 20},
        {name : "Friend 3" , age : 20},
        {name : "Friend 4" , age : 20},
        {name : "Friend 5" , age : 20},
        {name : "Friend 6" , age : 20},
        {name : "Friend 7" , age : 20},
        {name : "Friend 8" , age : 20},
    ]
    return (
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator = {false}
            keyExtractor = {friend => friend.name}
            data = {friends}
            renderItem = {({item}) => {
            return <Text style = {{paddingBottom : 50}}>{item.name} - Age {item.age}</Text>;
            }}
        />
    )
}

export default flatList;