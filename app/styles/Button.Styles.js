import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#115599',
        alignItems: 'center',
        width: '95%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        color: 'white',
    },
    List: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        alignContent: 'center',
    },
    buttonList: {
        backgroundColor: '#115599',
        alignItems: 'center',
        flex: 1,
        margin: 2,
        padding: 5,
        borderRadius: 10,
    },
    titleList: {
        fontSize: 20,
        color: 'white',
    },
    buttonText: {
        alignItems: 'center',
        width: '95%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    titleText: {
        fontSize: 20,
        color: '#115599',
        fontWeight: 'bold',
    },
    buttonFooter: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    buttonFooterText: {
        fontSize: 12,
        color: 'white',
    },
});