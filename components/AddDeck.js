import React from 'react';
import {Text, View, TextInput,TouchableOpacity } from 'react-native';

export default class AddCard extends React.Component{
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
  submitDeck = ()=>{


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
        <TouchableOpacity onPress={this.submitDeck}><Text>Submit</Text></TouchableOpacity>
      </View>
    )
  }

}
