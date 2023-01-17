// npm start -- --reset-cache
import React from 'react';
// eslint-disable-next-line prettier/prettier
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};
export default App;
