import React from 'react';

import {View , Text , StyleSheet} from 'react-native';
import ImageDetail from './ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title = "Forest" imgSource = {require('../../assets/forest.jpg')}/>
        <ImageDetail title = "Beach" imgSource = {require('../../assets/beach.jpg')}/>
        <ImageDetail title = "Mountain" imgSource = {require('../../assets/mountain.jpg')}/>
    </View>
}

export default ImageScreen;
