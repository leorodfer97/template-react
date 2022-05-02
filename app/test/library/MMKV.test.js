import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

import { storage } from '../data/mmkv.data';

import { BoxStyles } from '../styles/Box.styles';
import { ButtonStyles } from '../styles/Button.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestMMKV = () => {

    const playSet = (t) => {
        storage.set('data', t);
    }

    const playGet = () => {
        Alert.alert(
            "Get data",
            storage.getString('data'),
        );
    }
    
    const playGetKeys = () => {
        Alert.alert(
            "Get keys",
            `${storage.getAllKeys()}`,
        );
    }
    
    const playClear = () => {
        storage.clearAll()
        Alert.alert(
            "clear data",
            'Exito!',
        );
    }
    
    const playDelete = () => {
        storage.delete('data')
        Alert.alert(
            "delete data",
            'Eliminado',
        );
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-mmkv</Text>
            </View>

            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playSet('Perro') }} >
                <Text style={ButtonStyles.textButton}>set Perro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playSet('Gato') }} >
                <Text style={ButtonStyles.textButton}>set Gato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playGet() }} >
                <Text style={ButtonStyles.textButton}>get data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playGetKeys() }} >
                <Text style={ButtonStyles.textButton}>get keys</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playDelete() }} >
                <Text style={ButtonStyles.textButton}>delete data</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playClear() }} >
                <Text style={ButtonStyles.textButton}>clear data</Text>
            </TouchableOpacity>

        </View>
    );

}
 
export default TestMMKV;