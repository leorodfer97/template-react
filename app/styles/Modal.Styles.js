import { StyleSheet } from 'react-native';

export const ModalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
        backgroundColor: '#000000AA',
    },
    modalView: {
        width: '95%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        paddingBottom: 35,
        paddingHorizontal: 20,
        paddingTop: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader: {
        marginBottom: 2,
        width: '100%',
        alignItems: 'flex-end',
    },
    modalClose: {
        borderWidth: 3,
        borderColor: '#115599',
        paddingVertical: 2.5,
        paddingHorizontal: 5.5,
        borderRadius: 40,
    },
    title: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#115599',
    },
    modalRowImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 5,
    },
    imageSmallRow: {
        width: 100,
        height: 100,
    },
    textImportant: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
});