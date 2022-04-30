import { StyleSheet } from 'react-native';

export const InputStyles = StyleSheet.create({
    input: {
        width: '75%',
        display: 'flex',
        fontSize: 18,
        padding: 10,
    },
    text: {
        width: '25%',
        display: 'flex',
        textAlign: 'right',
        fontSize: 18,
        padding: 15,
    },
    container: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    }
});