import React from 'react';
import {Text, View, TextInput } from 'react-native';

export default class AddDeck extends React.Component{
  state = {
    deckValue: ''
  }
  hanldeChange = (inputText)=>{
  if(inputText){
      this.setState({
        deckValue:inputText
      })
    }
  }
  render(){
    return(
      <View>
        <Text>Deck Name:</Text>
        <TextInput
          value={this.state.deckValue}
          placeholder='Enter Deck Name'
          onChangeText = {inputText=>this.hanldeChange(inputText)}
        />
      </View>
    )
  }

}
