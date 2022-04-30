import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import ReactNativeBiometrics from 'react-native-biometrics'

import { ButtonStyles } from '../styles/Button.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestBiometrics = () => {

    let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
    let payload = epochTimeSeconds + 'some message'

    const playIsSensorAvailable = () => {
        ReactNativeBiometrics.isSensorAvailable()
        .then((resultObject) => {
            const { available, biometryType } = resultObject

            if (available && biometryType === ReactNativeBiometrics.TouchID) {
                console.log('TouchID is supported')
            } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
                console.log('FaceID is supported')
            } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
                console.log('Biometrics is supported')
            } else {
                console.log('Biometrics not supported')
            }
        })
    }
    
    const playCreateKeys = () => {
        ReactNativeBiometrics.createKeys('Confirm fingerprint')
        .then((resultObject) => {
            const { publicKey } = resultObject
            console.log(publicKey)
            // sendPublicKeyToServer(publicKey)
        })
    }

    const playDeleteKeys = () => {
        ReactNativeBiometrics.deleteKeys()
        .then((resultObject) => {
            const { keysDeleted } = resultObject

            if (keysDeleted) {
                console.log('Successful deletion')
            } else {
                console.log('Unsuccessful deletion because there were no keys to delete')
            }
        })
    }
    
    const playCreateSignature = () => {
        ReactNativeBiometrics.createSignature({
            promptMessage: 'Sign in',
            payload: payload
        })
        .then((resultObject) => {
            const { success, signature } = resultObject
        
            if (success) {
                console.log(signature)
                verifySignatureWithServer(signature, payload)
            } else {
                console.log(resultObject)
            }
        })
        .catch((e) => {
            console.log('Error fatal fatalito', e)
        })
    }
    
    const playSimplePrompt = () => {
        ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
        .then((resultObject) => {
            const { success } = resultObject

            if (success) {
            console.log('successful biometrics provided')
            } else {
            console.log('user cancelled biometric prompt')
            }
        })
        .catch(() => {
            console.log('biometrics failed')
        })
    }
        

    return(
        <View style={SectionStyles.section}>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playIsSensorAvailable() }} >
                <Text style={ButtonStyles.textButton}>Ejecutar isSensorAvailable</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playCreateKeys() }} >
                <Text style={ButtonStyles.textButton}>Ejecutar createKeys</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playDeleteKeys() }} >
                <Text style={ButtonStyles.textButton}>Ejecutar deleteKeys</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playCreateSignature() }} >
                <Text style={ButtonStyles.textButton}>Ejecutar createSignature</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={ () => { playSimplePrompt() }} >
                <Text style={ButtonStyles.textButton}>Ejecutar simplePrompt</Text>
            </TouchableOpacity>

        </View>
    );

}
 
export default TestBiometrics;