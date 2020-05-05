/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {Home} from './src/Home/Home';
import {store} from './src/redux';

export const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Home />
      </View>
    </Provider>
  );
};
