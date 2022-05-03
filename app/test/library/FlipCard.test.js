import React, {useState} from 'react';
import {Text, View} from 'react-native';

import GestureFlipView from 'react-native-gesture-flip-card';

import { BoxStyles } from '../styles/Box.styles';
import { FlipCardStyles } from '../styles/FlipCard.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestFlipCard = () => {

    const [widthView, setWidthView] = useState(0)
    const [heightView, setHeightView] = useState(0)

    const getWidthView = e => {
        let {height, width} = e.nativeEvent.layout;
        setWidthView(width);
        setHeightView(height);
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-gesture-flip-card</Text>
            </View>


            <View style={FlipCardStyles.viewFather}>
                <View style={FlipCardStyles.view} onLayout={getWidthView}>
                    <GestureFlipView 
                        width={300}
                        height={500}
                    >
                        {
                            <View style={[FlipCardStyles.flipCard1, {height: heightView, width: widthView}]}> 
                                <Text style={FlipCardStyles.text1}> 1 </Text>
                            </View>
                        }
                        {
                            <View style={[FlipCardStyles.flipCard2, {height: heightView, width: widthView}]}> 
                                <Text style={FlipCardStyles.text2}> 2 </Text>
                            </View>
                        }
                    </GestureFlipView>
                </View>
            </View>
            
        </View>
    );

}
 
export default TestFlipCard;