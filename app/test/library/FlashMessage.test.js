import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

import { BoxStyles } from '../styles/Box.styles';
import { ButtonStyles } from '../styles/Button.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestFlashMessage = () => {

    const playSuccess = () => {
        showMessage({
            message: "Felicidades",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta elit purus, ut tempor ante rutrum eu. Vestibulum finibus tortor iaculis, scelerisque augue eget, pulvinar eros.",
            type: "success",
            icon: "success",
        });
    }
    
    const playInfo = () => {
        showMessage({
            message: "Consejo",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta elit purus, ut tempor ante rutrum eu. Vestibulum finibus tortor iaculis, scelerisque augue eget, pulvinar eros.",
            type: "default",
            icon: "info",
        });
    }
    
    const playWarning = () => {
        showMessage({
            message: "Advertencia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta elit purus, ut tempor ante rutrum eu. Vestibulum finibus tortor iaculis, scelerisque augue eget, pulvinar eros.",
            type: "warning",
            icon: "warning",
        });
    }
    
    const playDanger = () => {
        showMessage({
            message: "Error",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta elit purus, ut tempor ante rutrum eu. Vestibulum finibus tortor iaculis, scelerisque augue eget, pulvinar eros.",
            type: "danger",
            icon: "danger",
        });
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-flash-message</Text>
            </View>

            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={() => { playSuccess(); }}>
                <Text style={ButtonStyles.textButton}>Success</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={() => { playInfo(); }}>
                <Text style={ButtonStyles.textButton}>Info</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={() => { playWarning(); }}>
                <Text style={ButtonStyles.textButton}>Warning</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={ButtonStyles.buttonAction} onPress={() => { playDanger(); }}>
                <Text style={ButtonStyles.textButton}>Danger</Text>
            </TouchableOpacity>
            
            <FlashMessage 
                position="bottom"
                floating={true}
                titleStyle={{ fontWeight: 'bold', fontSize: 18, }}
                textStyle={{ fontSize: 18, paddingRight: 5 }}
                autoHide={true}
                duration={5000}
                animationDuration={250}
            />
        </View>
    );

}
 
export default TestFlashMessage;