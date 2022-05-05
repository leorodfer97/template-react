import React from 'react';
import {Text, View} from 'react-native';
 
import Config from "react-native-config";

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestConfig = () => {



    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-config</Text>
                <Text style={BoxStyles.textBox}>data {Config.DATA}</Text>
            </View>
        </View>
    );

}
 
export default TestConfig;