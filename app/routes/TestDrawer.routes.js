import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TestStackRoutes from './TestStack.routes';
import TestTabRoutes from './TestTab.routes';

const Drawer = createDrawerNavigator();

const TestDrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="test-stack" component={TestStackRoutes} options={{gestureEnabled: true,}} />
      <Drawer.Screen name="test-animated-tab" component={TestTabRoutes} options={{gestureEnabled: true,}} />
    </Drawer.Navigator>
  );
}

export default TestDrawerRoutes;