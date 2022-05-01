import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import HomeRoutes from './app/routes/Home.routes';
import TestRoutes from './app/routes/Test.routes';

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <TestRoutes/>
    </NavigationContainer>
  );
};

export default App;