import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import { Container } from 'native-base'
import {createAppContainer} from 'react-navigation'
import {
  createStackNavigator,
} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
  DeckList: {
      screen: DeckList,
      navigationOptions: {
          tabBarLabel: 'DECKS',
          tabBarIcon:({tinColor})=><Ionicons name='md-albums' size={30} color={tinColor}/>
      }
  },
  AddDeck: {
      screen: AddDeck,
      navigationOptions: {
          tabBarLabel: 'ADD DECK',
          tabBarIcon:({tinColor})=><Ionicons name='ios-add-circle-outline' size={30} color={tinColor}/>
      }
  },
  
}, {
  tabBarOptions: {
      activeTintColor: 'black',
      labelStyle: {
          fontSize: 20,
          paddingBottom: 10,
          paddingTop:10,
          fontWeight: 'bold',
      }
  }
})

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
        header: null
    }
},
  AddCard: { screen: AddCard },
  AddDeck: { screen: AddDeck },
  DeckView:{ screen: DeckView }
});

const Navigator = createAppContainer(Stack);
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <Container>
        <Navigator/>
      </Container>
    </Provider>
  );
}


