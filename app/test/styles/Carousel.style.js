import {StyleSheet} from 'react-native';
import { withTheme } from 'styled-components';

export const CarouselStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '90%',
        alignItems: 'center',
    },
    carousel: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    viewCarousel: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    containerCarousel: {
        display: 'flex',
        width: '50%',
        height: '50%',
    },
    titleCarousel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageCarousel: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});