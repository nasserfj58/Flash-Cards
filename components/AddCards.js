import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import addCard from '../actions/index'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  hanldeChange = (inputText) => {
    if (inputText) {
      this.setState({
        deckValue: inputText
      })
    }
  }
  submitCard = () => {

  }
  render() {
    return (
      <View>
        <Text>Question:</Text>
        <TextInput
          value={this.state.question}
          placeholder='Enter Question'
          onChangeText={inputText => { if (inputText) this.setState({ question: inputText }) }}
        />
        <Text>Answer:</Text>
        <TextInput
          value={this.state.answer}
          placeholder='Enter Answer'
          onChangeText={inputText => { if (inputText) this.setState({ answer: inputText }) }}
        />
        <TouchableOpacity onPress={this.submitCard}><Text>Submit</Text></TouchableOpacity>
      </View>
    )
  }

}
export default connect()(AddCard)