/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  ScrollView,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const Home = () => {
  const [todo, setTodo] = useState('');
  const store = useSelector((store) => {
    return store;
  });
  console.log('store in comp', store);
  const dispatch = useDispatch();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{flex: 1}}
      style={styles.scrollView}>
      <View>
        <TextInput
          style={{
            borderColor: 'blue',
            height: 50,
            margin: 20,
            padding: 10,
            borderWidth: 1,
          }}
          value={todo}
          onChangeText={(text) => {
            setTodo(text);
          }}
        />
        <Button
          title="ADD"
          onPress={() => {
            dispatch({
              type: 'ADD',
              payload: todo,
            });
            setTodo('');
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
        {store.map((item, index) => {
          return (
            <View
              style={{
                borderColor: 'blue',
                height: 50,
                width: '100%',
                margin: 5,
                padding: 5,
                borderWidth: 1,
                flexDirection: 'row',
                borderRadius: 10,
              }}>
              <Text> {item} </Text>

              <Button
                style={{alignSelf: 'flex-end'}}
                title="DELETE"
                onPress={() => {
                  dispatch({
                    type: 'DELETE',
                    payload: index,
                  });
                }}
              />
            </View>
          );
        })}
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
