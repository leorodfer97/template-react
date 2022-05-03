import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderStyles } from '../test/styles/Header.styles';

import IndexTest from '../test';
import TestBiometrics from '../test/library/Biometrics.test';
import TestFingerPrintScanner from '../test/library/FingerPrint.test';
import TestImageModal from '../test/library/ImageModal.test';
import TestCardInput from '../test/library/CardInput.test';
import TestMMKV from '../test/library/MMKV.test';
import TestSwitchSelector from '../test/library/SwitchSelector.test';
import TestHeaderParallax from '../test/library/HeaderParallax.test';
import TestPinar from '../test/library/Pinar.test';
import TestCardIO from '../test/library/CardIO.test';
import TestLocalAuth from '../test/library/localAuth.test';

const Stack = createNativeStackNavigator();

const TestStackRoutes = () => {

    return (
        // <Stack.Navigator initialRouteName="index" screenOptions={{headerShown: false}}>
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={IndexTest}
                options={{
                    title: 'Testing',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="react-native-fingerprint-scanner"
                component={TestFingerPrintScanner}
                options={{
                    title: 'Fingerprint Scanner',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="biometrics"
                component={TestBiometrics}
                options={{
                    title: 'Biometrics',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="image-modal"
                component={TestImageModal}
                options={{
                    title: 'Image Modal',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="card-input"
                component={TestCardInput}
                options={{
                    title: 'Card input',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="storage-mmkv"
                component={TestMMKV}
                options={{
                    title: 'Storage MMKV',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="switch-selector"
                component={TestSwitchSelector}
                options={{
                    title: 'Switch Selector',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="header-parallax"
                component={TestHeaderParallax}
                options={{
                    title: 'Header Parallax',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="pinar"
                component={TestPinar}
                options={{
                    title: 'Pinar',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="card-io"
                component={TestCardIO}
                options={{
                    title: 'Card IO',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
            <Stack.Screen
                name="local-auth"
                component={TestLocalAuth}
                options={{
                    title: 'Local Auth',
                    headerTitleAlign: 'center',
                    headerTitleStyle: HeaderStyles.title,
                    headerTintColor: 'white',
                    headerStyle: HeaderStyles.header,
                }}
            />
        </Stack.Navigator>
    );
}

export default TestStackRoutes;