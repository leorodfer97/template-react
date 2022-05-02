import React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tabs = AnimatedTabBarNavigator();

import TestPage1 from '../test/pages/TestPage1';
import TestPage2 from '../test/pages/TestPage2';
import TestPage3 from '../test/pages/TestPage3';
import TestPage4 from '../test/pages/TestPage4';
import TestPage5 from '../test/pages/TestPage5';

const TestTabRoutes = () => {

    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#F0F0F0",
                inactiveTintColor: "#0F0F0F",
                activeBackgroundColor: '#115599',
                labelStyle: {
                    fontSize: 16,
                }
            }}
            appearance={{
                tabBarBackground: 'white',
                floating: true,
                tabButtonLayout: 'vertical',
                whenActiveShow: 'icon-only',
                whenInactiveShow: 'icon-only',
                dotSize: 'small',
                horizontalPadding: 10,
            }}
        >
            <Tabs.Screen
                name="Inicio"
                component={TestPage1}
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Icon color={color} name={'home'} size={25}/>
                  )
                }}
            />
            <Tabs.Screen
                name="Pólizas"
                component={TestPage2}
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Icon color={color} name={'file-invoice'} size={25}/>
                  )
                }}
            />
            <Tabs.Screen
                name="Siniestros"
                component={TestPage3}
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Icon color={color} name={'exclamation-triangle'} size={25}/>
                  )
                }}
            />
            <Tabs.Screen
                name="Info"
                component={TestPage4}
                options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Icon color={color} name={'info-circle'} size={25}/>
                  )
                }}
            />

        </Tabs.Navigator>
    );
}

export default TestTabRoutes;