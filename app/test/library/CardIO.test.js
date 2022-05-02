import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';

import { CardIOModule } from 'react-native-awesome-card-io';

import { BoxStyles } from '../styles/Box.styles';
import { ButtonStyles } from '../styles/Button.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestCardIO = () => {

    const playLibrary = () => {
        CardIOModule.scanCard( config = {
            guideColor: 'red',
            hideCardIOLogo: true,
            useCardIOLogo: false,
            suppressConfirmation: true,
            scanExpiry: true,
        })
        .then((card) => {
            console.log(card);
        })
        .catch((e) => {
          console.log(e);
        })
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-awesome-card-io</Text>
            </View>
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={() => { playLibrary(); }}>
                <Text style={ButtonStyles.textButton}>Ejecutar</Text>
            </TouchableOpacity>
        </View>
    );

}
 
export default TestCardIO;