import React, {useState} from 'react';
import {Text, View} from 'react-native';
 
import ImageModal from 'react-native-image-modal';

import { BoxStyles } from '../styles/Box.styles';
import { ImageStyles } from '../styles/Image.styles';
import { SectionStyles } from '../styles/Section.styles';

const TestImageModal = () => {

    const [widthView, setWidthView] = useState(0)

    const getWidthView = e => {
        let {width} = e.nativeEvent.layout;
        setWidthView(width);
    }

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>react-native-image-modal</Text>
                <Text style={BoxStyles.textBox}>{`Requiere --> react-native-fast-image`}</Text>
            </View>
            <View style={ImageStyles.container} onLayout={getWidthView}>
                <ImageModal
                    resizeMode="cover"
                    modalImageResizeMode='contain'
                    style={{
                        height: 250,
                        width: widthView,
                    }}
                    source={{
                        uri: 'https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg',
                    }}
                />
            </View>
        </View>
    );

}
 
export default TestImageModal;