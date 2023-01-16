// npm start -- --reset-cache
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet } from 'react-native';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 20,
    width: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
