import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import LocalAuthentication from 'rn-local-authentication';

import { BoxStyles } from '../styles/Box.styles';
import { ButtonStyles } from '../styles/Button.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestLocalAuth = () => {
    const [dataAuth, setDataAuth] = useState('');

    const playLibrary = () => {
        LocalAuthentication.authenticateAsync({
            title: "Titulo",
            description: "",
            cancelTitle: "Boton de cancelar",
            reason: "Razon",
            fallbackToPinCodeAction: true,
        }).then(response => {
            if (response.success) {
                setDataAuth('Ok');
            } else {
                setDataAuth('No ok');
            }
        })
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>rn-local-authentication</Text>
                <Text style={BoxStyles.textBox}>Resultado: {dataAuth}</Text>
            </View>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playLibrary() }} >
                <Text style={ButtonStyles.textButton}>Ejecutar</Text>
            </TouchableOpacity>
        </View>
    );

}
 
export default TestLocalAuth;