import React from 'react';
import { Text,StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { insertDeck } from '../util/api';
import { Container,Content, Form, Item, Input, Label, Button } from 'native-base'


class AddDeck extends React.Component {
  state = {
    deckValue: ''
  }
  hanldeChange = (inputText) => {
    this.setState({
      deckValue: inputText
    })

  }
  submitDeck = () => {
    if (this.state.deckValue) {

      // this code idea obtained from :https://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time
      const deckKey = parseInt(Date.now() + Math.random())
      const deck = {
        deckName : this.state.deckValue,
        cards:[]

      }

      this.props.dispatch((addDeck({
        [deckKey]:deck
      })))

      this.setState({ deckValue: '' })

      insertDeck({ deck: deck, deckKey: deckKey })
      const { navigate } = this.props.navigation;
      navigate('DeckList');
    }
    else{
      alert("Please Enter Deck Name!");
    }


  }
  render() {

    return (
      <Container>
        <Content style={{ marginTop: 200 }}>
          <Form>
            <Item floatingLabel style={{marginTop:30}}>
              <Label style={{fontSize:20}}>Deck Name</Label>
              <Input onChangeText={inputText => this.hanldeChange(inputText)}
                maxLength={30}
                style={styles.input}
                value={this.state.deckValue}
              />
            </Item>
            <Button block light onPress={this.submitDeck}>
              <Text style={{ fontSize: 20 }}>Add New Deck </Text>
            </Button>
          </Form>
        </Content>
      </Container>

    )
  }

}
function mapStateToProps(state) {

  return ({
    state
  }
  )
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
export default connect(mapStateToProps)(AddDeck)