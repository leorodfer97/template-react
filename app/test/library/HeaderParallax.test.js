import React from 'react';
import {Text, View} from 'react-native';

import StickyParallaxHeader from 'react-native-sticky-parallax-header';

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';


const TestHeaderParallax = ({navigation}) => {

    return(
        <StickyParallaxHeader 
            headerType="AvatarHeader"
            backgroundColor="#119955"
            title="Alexander Seropian"
            subtitle="Cod. Asegurado: 041911704"
            image={require('./../../images/avatar.jpg')}
            hasBorderRadius={false}
            leftTopIcon={require('./../../images/bars-solid.png')}
            leftTopIconOnPress={() => {
                navigation.toggleDrawer()
            }}
            rightTopIcon={require('./../../images/search-solid.png')}
            parallaxHeight={200}
            contentContainerStyles={{
                paddingVertical: 50
            }}
            snapValue={true}
            snapToEdge={true}
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