import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestHeaderParallax = () => {

    return(
        <StickyParallaxHeader 
            headerType="AvatarHeader"
            backgroundColor="#119955"
            title="Alexander Seropian"
            subtitle="Cod. Asegurado: 041911704"
            image={require('./../../images/avatar.jpg')}
            hasBorderRadius={false}
            leftTopIcon={require('./../../images/bars-solid.png')}
            rightTopIcon={require('./../../images/search-solid.png')}
            parallaxHeight={200}
        >
            <View style={SectionStyles.section}>
                <View style={BoxStyles.box}>
                    <Text style={BoxStyles.textBox}>react-native-sticky-parallax-header</Text>
                </View>
            </View> 
        </StickyParallaxHeader>
    );

}
 
export default TestHeaderParallax;