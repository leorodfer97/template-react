import {StyleSheet} from 'react-native';

export const FlipCardStyles = StyleSheet.create({
    viewFather:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    view:{
        flex: 1,
        width: '90%',
        height: '100%',
        alignItems: 'center',
    },  
    flipCard1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    flipCard2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 50,
    },
    text1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
    },
    text2: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'yellow',
    }
});