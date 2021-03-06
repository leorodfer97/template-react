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

                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('react-native-fingerprint-scanner');}}>
                    <Text style={ButtonStyles.textButton}>Fingerprint Scanner</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ButtonStyles.button}onPress={() => {navigation.navigate('biometrics');}}>
                    <Text style={ButtonStyles.textButton}>Biometrics</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('image-modal');}}>
                    <Text style={ButtonStyles.textButton}>Image Modal</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('card-input');}}>
                    <Text style={ButtonStyles.textButton}>Card Input</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('storage-mmkv');}}>
                    <Text style={ButtonStyles.textButton}>Storage MMKV</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('switch-selector');}}>
                    <Text style={ButtonStyles.textButton}>Switch Selector</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('header-parallax');}}>
                    <Text style={ButtonStyles.textButton}>Header Parallax</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('pinar');}}>
                    <Text style={ButtonStyles.textButton}>Pinar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('card-io');}}>
                    <Text style={ButtonStyles.textButton}>Card IO</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('local-auth');}}>
                    <Text style={ButtonStyles.textButton}>Local Auth</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('magnus');}}>
                    <Text style={ButtonStyles.textButton}>Magnus UI</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('flip-card');}}>
                    <Text style={ButtonStyles.textButton}>Flip Card</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('keyboard-scroll');}}>
                    <Text style={ButtonStyles.textButton}>Keyboard Scroll</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('config');}}>
                    <Text style={ButtonStyles.textButton}>Config</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ButtonStyles.button} onPress={() => {navigation.navigate('flash-message');}}>
                    <Text style={ButtonStyles.textButton}>Flash Message</Text>
                </TouchableOpacity>

            </ScrollView>
        </>
    );

}

export default IndexTest;