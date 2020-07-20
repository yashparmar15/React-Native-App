import React , {useState} from 'react';
import {View , Text , StyleSheet , TextInput} from 'react-native';

const TextScreen = () => {
    const [text , setText] = useState("");
    let flag = "";
    if(text.length < 6)
        flag = "Input length is less than 6"
    else
        flag = ""
    return <View>
        <Text>Enter Name : </Text>
        <TextInput 
            style = {styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            onChangeText = {(newValue) => setText(newValue)}
        />
        <Text>My name is {text}</Text>
        <Text>{flag}</Text>
    </View>
}

const styles = StyleSheet.create({
    input : {
        margin : 15,
        borderColor : 'black',
        borderWidth : 1,
        padding : 15
    }
})

export default TextScreen;