import React from 'react';
import {Image, Text, View} from 'react-native';

import Carousel from "pinar";

import { BoxStyles } from '../styles/Box.styles';
import { SectionStyles } from '../styles/Section.styles';
import { CarouselStyles } from '../styles/Carousel.style';

const TestPinar = () => {

    return(
        <View style={SectionStyles.section}>
            <View style={BoxStyles.box}>
                <Text style={BoxStyles.textBox}>pinar</Text>
            </View>

            <View style={CarouselStyles.container}>
                <Carousel 
                    style={CarouselStyles.carousel}
                    showsControls={false}
                    loop={true}
                >
                    <View style={CarouselStyles.viewCarousel}>
                        <View style={CarouselStyles.containerCarousel}>
                            <Image style={CarouselStyles.imageCarousel} source={require('./../../images/product00.png')}/>
                        </View>
                        <Text style={CarouselStyles.titleCarousel}>Auriculares negros</Text>
                    </View>
                    <View style={CarouselStyles.viewCarousel}>
                        <View style={CarouselStyles.containerCarousel}>
                            <Image style={CarouselStyles.imageCarousel} source={require('./../../images/product01.png')}/>
                        </View>
                        <Text style={CarouselStyles.titleCarousel}>Auriculares purpura</Text>
                    </View>
                    <View style={CarouselStyles.viewCarousel}>
                        <View style={CarouselStyles.containerCarousel}>
                            <Image style={CarouselStyles.imageCarousel} source={require('./../../images/product02.png')}/>
                        </View>
                        <Text style={CarouselStyles.titleCarousel}>Auriculares verdes</Text>
                    </View>
                    <View style={CarouselStyles.viewCarousel}>
                        <View style={CarouselStyles.containerCarousel}>
                            <Image style={CarouselStyles.imageCarousel} source={require('./../../images/product03.png')}/>
                        </View>
                        <Text style={CarouselStyles.titleCarousel}>Auriculares rojos</Text>
                    </View>
                </Carousel>
            </View>
        </View>
    );

}
 
export default TestPinar;