import React , {useState , useReducer} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import ColorCounter from './ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state , action) =>{
    //state === {red : number , green : number , blue : number}
    //action === {colorToChange : 'red' || green || blue , amount}
    switch(action.colorToChange) {
        case 'red':
            return {...state , red : state.red + action.amount};
        case 'green':
            return {...state , green : state.green + action.amount};
        case 'blue':
            return {...state , blue : state.blue + action.amount};
        default :
            return state;
    }

};


const SquareScreen = () => {
    const [state , dispatch] = useReducer(reducer , {red : 0 , green : 0 , blue : 0});
    console.log(state);
    // const [red , setRed] = useState(0);
    // const [blue , setBlue] = useState(0);
    // const [green , setGreen] = useState(0);
    // const setColor = (color , change) => {
    //     switch(color){
    //         case 'red': {
    //             if(red + change > 255 || red + change < 0)
    //                 return;
    //             else
    //                 setRed(red + change);
    //             break;
    //         }
    //         case 'green': {
    //             if(green + change > 255 || green + change < 0)
    //                 return;
    //             else
    //                 setGreen(green + change);
    //             break;
    //         }
    //         case 'blue': {
    //             if(blue + change > 255 || blue + change < 0)
    //                 return;
    //             else
    //                 setBlue(blue + change);
    //             break;
    //         }
    //         default : return;
    //     }
    // }
    return <View>
        <ColorCounter 
            onIncrease = {() => dispatch({colorToChange : 'red' , amount : COLOR_INCREMENT})}
            onDecrease = {() => dispatch({colorToChange : 'red' , amount : -1*COLOR_INCREMENT})} 
            color = "Red"
        />
        <ColorCounter 
            onIncrease = {() => dispatch({colorToChange : 'green' , amount : COLOR_INCREMENT})}
            onDecrease = {() => dispatch({colorToChange : 'green' , amount : -1*COLOR_INCREMENT})}
            color = "Green"
        />
        <ColorCounter 
            onIncrease = {() => dispatch({colorToChange : 'blue' , amount : COLOR_INCREMENT})}
            onDecrease = {() => dispatch({colorToChange : 'blue' , amount : -1*COLOR_INCREMENT})}
            color = "Blue"
        />
        <View style = {{height : 150 , width : 150 , backgroundColor : `rgb(${state.red},${state.green},${state.blue})`}} />
    </View>
}

export default SquareScreen; 