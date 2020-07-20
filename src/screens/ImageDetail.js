import React from 'react';

import {View , StyleSheet , Text , Image} from 'react-native';

const ImageDetail = (props) => {
    return <View>
        <Image style = {styles.image} source = {props.imgSource} />
        <Text>{props.title}</Text>
    </View>
    
}
const styles = StyleSheet.create({
    image : {
        width : 200,
        height : 150
    }
})
export default ImageDetail;