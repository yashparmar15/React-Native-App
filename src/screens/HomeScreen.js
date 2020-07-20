import React from "react";
import { Text, StyleSheet , View , Button , TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  return <View>
        <Text style={styles.text}>Hi There!</Text>
        <Button 
          onPress = {() => props.navigation.navigate('Components')}
          title = "Go to Components Screen" 
          style = {styles.button}
        />
        <TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
          <Text>Go to List Screen</Text>
          <Text>Go to List Screen</Text>
          <Text>Go to List Screen</Text>
        </TouchableOpacity>
        <Button 
          onPress = {() => props.navigation.navigate('Image')}
          title = "Go to Image Screen" 
          style = {styles.button}
        />
        <Button 
          onPress = {() => props.navigation.navigate('Counter')}
          title = "Go to Counter Screen" 
          style = {styles.button}
        />
        <Button 
          onPress = {() => props.navigation.navigate('Color')}
          title = "Go to Color Screen" 
          style = {styles.button}
        />
        <Button 
          onPress = {() => props.navigation.navigate('Square')}
          title = "Go to Square Screen" 
          style = {styles.button}
        />
        <Button 
          onPress = {() => props.navigation.navigate('Text')}
          title = "Go to Text Screen" 
          style = {styles.button}
        />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor : 'red',
    color : 'white',
    textAlign : 'center', 
  }
});

export default HomeScreen;
