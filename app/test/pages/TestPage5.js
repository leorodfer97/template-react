import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TestPage5 = () => {      

    return(
        <View style={style.screen}>
            
            <Text style={style.text}> TestPage 5 </Text>

        </View>
    );

}

const style = StyleSheet.create({
    screen: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 40,
    }
});

export default TestPage5;