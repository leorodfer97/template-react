import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// import HomeRoutes from './app/routes/Home.routes';
import TestStackRoutes from './app/routes/TestStack.routes';
import TestDrawerRoutes from './app/routes/TestDrawer.routes';

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <TestDrawerRoutes/>
    </NavigationContainer>
  );
};

export default App;