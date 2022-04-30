import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import HomeRoutes from './app/routes/Home.routes';
import TestRoutes from './app/routes/Test.routes';

const App = () => {
  return (
    <NavigationContainer>
      <TestRoutes/>
    </NavigationContainer>
  );
};

export default App;