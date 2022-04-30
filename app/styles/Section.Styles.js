import { StyleSheet } from 'react-native';

export const SectionStyles = StyleSheet.create({
    SectionCenter: {
        flex: 1,
        display: 'flex',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    SectionTop: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
    },
    boxText:{
        display: 'flex',
        width: '100%',
        alignContent: 'flex-start',
    },
    textBold: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    textBoldColor: {
        color: '#115599'
    },
});