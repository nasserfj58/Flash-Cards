import React from 'react';
import {Text,StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import {addCard} from '../actions/index'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base'
import {insertCard} from '../util/api'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  submitCard = () => {
    if (this.state.question && this.state.answer) {

      const navigation = this.props.navigation
      const deckId = navigation.getParam('deckId', 'ERROR')
      const card = {
        question:this.state.question,
        answer:this.state.answer,
        deckId:deckId

      }
      this.props.dispatch((addCard(
        card
      )))
 

      this.setState({
        question: '',
        answer: ''
      })

      insertCard({ deckId: deckId, card: card })
      const { navigate } = this.props.navigation

      navigate('DeckView', {
        deckId: navigation.getParam('deckId', 'ERROR'),
        deckName: navigation.getParam('deckName', 'ERROR')
      })

      
    }
    else{
      alert("Please Enter Question and Answer!");
    }
      
    }
  render() {
    return (
      <Container>
      <Content>
        <Form>
          <Item floatingLabel style={{marginTop:50}}>
            <Label style={{fontSize:20}}>Question</Label>
            <Input onChangeText={inputText => { this.setState({ question: inputText }) }}
                  maxLength={30}
                  style={styles.input}
                  value={this.state.question}
            />
          </Item>
          <Item floatingLabel style={{marginTop:30}}>
            <Label style={{fontSize:20}}>Answer</Label>
            <Input onChangeText={inputText => { this.setState({ answer: inputText }) }}
                  maxLength={30}
                  style={styles.input}
                  value={this.state.answer}
            />
          </Item>
          <Button block light onPress={this.submitCard} style={{marginTop:30}}>
          <Text style={{fontSize:20}}>Add New Card </Text>
        </Button>
        </Form>
      </Content>
    </Container>
    )
  }

}

const styles = StyleSheet.create({
  input: {
    width: 200,
    marginBottom: 30,
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: '#999897',
    marginRight: 20

  },
});
export default connect()(AddCard)