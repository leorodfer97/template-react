import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
 
import FingerprintScanner from 'react-native-fingerprint-scanner';

import { ButtonStyles } from '../styles/Button.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestFingerPrintScanner = () => {

    const playLibrary = () => {
        let hasBiometric = false;
        const biometric = async () => {
            FingerprintScanner.isSensorAvailable()
            .then(biometryType => {
                console.log(biometryType);
                hasBiometric = true;
            })
            .catch(error => {
                console.log(error);
            });
            return () => {
                FingerprintScanner.release();
            };
        };

        FingerprintScanner.authenticate({
            title: 'Confirmá para continuar',
            subTitle: '',
            description: '',
            cancelButton: 'Cancelar',
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    
        biometric();
    }

    return(
        <View style={SectionStyles.section}>

            <TouchableOpacity
                style={ButtonStyles.buttonAction}
                onPress={ () => { 
                    playLibrary() 
                }}
            >
                <Text style={ButtonStyles.textButton}>Ejecutar</Text>
            </TouchableOpacity>
        </View>
    );

}
 
export default TestFingerPrintScanner;