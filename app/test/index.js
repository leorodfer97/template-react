import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { SectionStyles } from './styles/Section.styles';
import { ButtonStyles } from './styles/Button.styles';

const IndexTest = () => {

    const navigation = useNavigation();

    return (
        <>
            <ScrollView style={SectionStyles.sectionScroll}>

                <TouchableOpacity 
                    style={ButtonStyles.button}
                    onPress={() => {navigation.navigate('react-native-fingerprint-scanner');}}
                >
                    <Text style={ButtonStyles.textButton}>Fingerprint Scanner</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ButtonStyles.button}
                    onPress={() => {navigation.navigate('biometrics');}}
                >
                    <Text style={ButtonStyles.textButton}>Biometrics</Text>
                </TouchableOpacity>

            </ScrollView>
        </>
    );

}

export default IndexTest;