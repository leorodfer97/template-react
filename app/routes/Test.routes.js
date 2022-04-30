import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderStyles } from '../test/styles/Header.styles';

import IndexTest from '../test';
import TestBiometrics from '../test/library/Biometrics.test';
import TestFingerPrintScanner from '../test/library/FingerPrint.test';

const Stack = createNativeStackNavigator();

const TestRoutes = () => {

    return (
        <Stack.Navigator>
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
        </Stack.Navigator>
    );
}

export default TestRoutes;