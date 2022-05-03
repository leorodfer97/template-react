import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from "react-native-magnus";

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestKeyboardScroll = () => {

    return(
        <ScrollView style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-keyboard-aware-scroll-view</Text>
            </View>

            <KeyboardAwareScrollView>
                <View>
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                    <Input
                        placeholder="Username"
                        p={10}
                        focusBorderColor="blue700"
                    />
                </View>
            </KeyboardAwareScrollView>
        </ScrollView>
    );

}
 
export default TestKeyboardScroll;