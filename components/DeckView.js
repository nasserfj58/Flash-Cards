import React from 'react';
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Container, H3, Content, Form, Body, CardItem, Card, Button } from 'native-base'

class DeckView extends React.Component {

    render() {
        const { navigation } = this.props;
        const counter = this.props.decks[navigation.getParam('deckId', 'ERROR')]["cards"].length;
        return (
            <Container>

                <Content style={{ marginTop: 100 }}>
                    <Form>
                        <Card>

                            <CardItem header>
                                <H3>{navigation.getParam('deckName', 'ERROR')}</H3>
                            </CardItem>
                            <CardItem header>
                                <H3>Number Of Cards: {counter}</H3>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Button style={{ marginTop: 30 }} block light disabled={counter == 0} onPress={() => {
                                        this.props.navigation.navigate('Vote', {
                                            deckId: navigation.getParam('deckId', 'ERROR'),
                                            deckName: navigation.getParam('deckName', 'ERROR')

                                        });
                                    }}>
                                        <Text style={{ fontSize: 20 }}>Star Quiz </Text>
                                    </Button>
                                    <Button style={{ marginTop: 30 }} block light onPress={() => {
                                        this.props.navigation.navigate('AddCard', {
                                            deckId: navigation.getParam('deckId', 'ERROR'),
                                            deckName: navigation.getParam('deckName', 'ERROR')

                                        });
                                    }}>
                                        <Text style={{ fontSize: 20 }}>Add New Card </Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </Form>
                </Content>
            </Container>


        )
    }

}
function mapStateToProps(decks) {

    return ({
        decks
    }
    )

}
export default connect(mapStateToProps)(DeckView)