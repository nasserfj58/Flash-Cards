import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import {addDeck} from '../actions/index'
import { insertDeck } from '../util/api'

class AddDeck extends React.Component {
  state = {
    deckValue: ''
  }
  hanldeChange = (inputText) => {
    if (inputText) {
      this.setState({
        deckValue: inputText
      })
    }
  }
  submitDeck = () => {
    // this code idea obtained from :https://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time
    const deckKey = parseInt(Date.now() + Math.random())
    const deck = this.state.deckValue

    this.props.dispatch((addDeck({
      [deckKey]: deck
    })))

    this.setState({ deckValue: '' })

    insertDeck({ deck:deck, deckKey:deckKey })


  }
  render() {
    return (
      <View>
        <Text>Deck Name:</Text>
        <TextInput
          value={this.state.deckValue}
          placeholder='Enter Deck Name'
          onChangeText={inputText => this.hanldeChange(inputText)}
        />
        <TouchableOpacity onPress={this.submitDeck}><Text>Submit</Text></TouchableOpacity>
      </View>
    )
  }

}
function mapStateToProps(state){
  console.log(state)
  return({
  }
  )
}
export default connect(mapStateToProps)(AddDeck)