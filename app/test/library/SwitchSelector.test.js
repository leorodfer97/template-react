import React from 'react';
import {Text, View} from 'react-native';

import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestSwitchSelector = () => {

    const options = [
        { 
            label: "  Femenino", 
            value: "f",
            customIcon: <Icon name={'venus'} size={20}/>
        },
        { 
            label: "  Masculino", 
            value: "m",
            customIcon: <Icon name={'mars'} size={20}/>
        },
    ]

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-switch-selector</Text>
            </View>

            <SwitchSelector
                valuePadding={5}
                fontSize={20}
                buttonMargin={5}
                options={options}
                borderRadius={100}
                selectedColor={'#EEEEEE'}
                buttonColor={'#FF8F00'}
                backgroundColor={'#FFFFFF'}
                textColor={'#555555'}
                animationDuration={125}
                bold={true}
            />

        </View>
    );

}
 
export default TestSwitchSelector;