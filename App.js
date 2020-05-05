/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import {Home} from './src/Home/Home';

export const App = () => {
  return (
    <View style={{flex: 1}}>
      <Home />
    </View>
  );
};
