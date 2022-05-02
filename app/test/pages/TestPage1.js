import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TestPage1 = () => {      

    return(
        <View style={style.screen}>
            
            <Text style={style.text}> TestPage 1 </Text>

        </View>
    );

}

const style = StyleSheet.create({
    screen: {
        backgroundColor: '#115599',
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
    }
});

export default TestPage1;