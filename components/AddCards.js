import React from 'react';
import {Text, View, TextInput } from 'react-native';

export default class AddCard extends React.Component{
  state = {
    question: '',
    answer:''
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
        <Text>Question:</Text>
        <TextInput
          value={this.state.question}
          placeholder='Enter Question'
          onChangeText = {inputText=>{if(inputText) this.setState({question:inputText})}}
        />
        <Text>Answer:</Text>
        <TextInput
          value={this.state.answer}
          placeholder='Enter Answer'
          onChangeText = {inputText=>{if(inputText) this.setState({answer:inputText})}}
        />
      </View>
    )
  }

}
