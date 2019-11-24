import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AddDeck from './components/AddDeck'

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View>
        <AddDeck></AddDeck>
      </View>
    </Provider>
  );
}


