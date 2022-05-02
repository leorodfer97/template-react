import React from 'react';
import {Text, View} from 'react-native';

import { CardView } from "react-native-credit-card-input";

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestCardInput = () => {

    const placeholders = {
        number: 'xxxx xxxx xxxx xxxx',
        expiry: 'MM/YY',
        name: 'NOMBRE COMPLETO',
        cvc: 'xxxx',
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-credit-card-input</Text>
                <Text style={BoxStyles.textBox}>{`Requiere -> deprecated-react-native-prop-types`}</Text>
                <Text style={BoxStyles.textBox}>Tambien tira warnings pero se deberian ignorar</Text>
            </View>

            <CardView
                fontFamily={'monospace'}
                placeholder={placeholders}
                brand={'visa'}
                focused={'brand'}
                cardImageFront={0}
                cardImageBack={0}
                name={'Juan perez'}
                expiry={'12/26'}
                number={'4040 5050 6060 5050'}
                cvc={'159'}
            />
            
        </View>
    );

}
 
export default TestCardInput;