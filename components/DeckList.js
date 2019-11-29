import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import { getDecks } from '../actions/index'
import { retrieveDecks } from '../util/api'
import { Container, H3, Content, Card, CardItem, Thumbnail, Text, Left, Body,Header } from 'native-base'
import { Ionicons } from '@expo/vector-icons'


class DeckList extends React.Component {
    
    componentDidMount() {
        retrieveDecks().then((value) => {
            getDecks(value)
        })
    }
    render() {
        if (!this.props.decks || this.props.decks.decksValues.length == 0|| this.props.decks.keys.length == 0) {
            return (
                <Container>
                    <Content style={{ marginTop: 200 }}>
                        <Body>
                            <Ionicons name='md-happy' size={60} />
                            <H3>Add New Decks And Comeback</H3>
                        </Body>
                    </Content>
                </Container>
            )
        }
        return (
            <Container>
                  <Header style={{ backgroundColor: 'black' }} />
                <Content>
                    {this.props.decks["decksValues"].map((deck, i) => (
                        <Card key={this.props.decks["keys"][i]} >
                            <CardItem style={{ height:70 }} >
                                <Left>
                            <Body>
                            <H3 style={{padding:50}} onPress={() => {
                            this.props.navigation.navigate('DeckView', {
                              deckId: this.props.decks["keys"][i],
                              deckName: deck["deckName"]

                            });
                          }}>{deck["deckName"]}</H3>
                            </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    ))}
                </Content>
            </Container>
        )
    }

}
function mapStateToProps(decks) {
    
    return ({
        decks:{
            decksValues:Object.values(decks),
            keys:Object.keys(decks)
        }
    }
    )
}

export default connect(mapStateToProps)(DeckList)