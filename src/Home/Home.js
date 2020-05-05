/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{flex: 1}}
      style={styles.scrollView}>
      <View>
        <Text style={{color: 'black'}}>Home </Text>

        <Button
          title="ADD"
          onPress={() => {
            dispatch({
              type: 'ADD',
              payload: 'Eat',
            });
          }}
        />

        <Button
          title="DELETE"
          onPress={() => {
            dispatch({
              type: 'DELETE',
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
