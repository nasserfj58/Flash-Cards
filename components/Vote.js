import React from 'react';
import { connect } from 'react-redux'
import { Text, TouchableOpacity } from 'react-native'
import { Container, H1, Content, Form, Body, CardItem, Card, Button, Left } from 'native-base'
import {clearLocalNotification, setLocalNotification } from '../util/helper'

class Vote extends React.Component {
    state = {
        counter: 0,
        correctAnswers: 0,
        isQuestion: true
    }

    render() {
        const { navigation } = this.props;
        const counter = this.props.decks[navigation.getParam('deckId', 'ERROR')]["cards"].length;

        if (this.state.counter === counter) {
            return (
                <Container>
                    <Content style={{ marginTop: 100 }}>
                        <Form>
                            <Card>
                                <CardItem header>
                                    <H1>Correct Answers: {this.state.correctAnswers} OF {counter}</H1>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Button style={{ marginTop: 30 }} block light onPress={() => {
                                            this.setState({
                                                counter: 0,
                                                correctAnswers: 0,
                                                isQuestion: true
                                            })
                                            clearLocalNotification()
                                                .then(setLocalNotification)
                                        }}>
                                            <Text style={{ fontSize: 20 }}>Retake Quiz </Text>
                                        </Button>
                                        <Button style={{ marginTop: 30 }} block light onPress={() => {
                                            clearLocalNotification()
                                                .then(setLocalNotification)
                                            this.props.navigation.navigate('DeckList', {
                                            });
                                        }}>
                                            <Text style={{ fontSize: 20 }}>Go To Decks </Text>
                                        </Button>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Form>
                    </Content>
                </Container>
            )
        }
        return (
            <Container>
                <Content style={{ marginTop: 50 }}>
                    <Form>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                isQuestion: !this.state.isQuestion
                            })
                        }}>
                            <Card>
                                <CardItem style={{ height: 300 }}>
                                    <Left>
                                        <Body>
                                            <H1 style={{ textAlign: 'center' }}>  {this.state.isQuestion ? this.props.decks[navigation.getParam('deckId', 'ERROR')]["cards"][this.state.counter]["question"] : this.props.decks[navigation.getParam('deckId', 'ERROR')]["cards"][this.state.counter]["answer"]}</H1>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <Card>
                            <CardItem header>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Button style={{ marginTop: 30, backgroundColor: 'green' }} block light onPress={() => {
                                        this.setState({
                                            counter: this.state.counter + 1,
                                            correctAnswers: this.state.correctAnswers + 1,
                                            isQuestion: true
                                        })
                                    }}>
                                        <Text style={{ fontSize: 20 }}>Correct </Text>
                                    </Button>
                                    <Button style={{ marginTop: 30, backgroundColor: 'red' }} block light onPress={() => {
                                        this.setState({
                                            counter: this.state.counter + 1,
                                            isQuestion: true
                                        })
                                    }}>
                                        <Text style={{ fontSize: 20 }}>Wrong </Text>
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
export default connect(mapStateToProps)(Vote)