import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeRoutes from './app/routes/Home.Routes';

const App = () => {
  return (
    <NavigationContainer>
      <HomeRoutes/>
    </NavigationContainer>
  );
};

export default App;