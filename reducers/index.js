import {ADD_DECK, ADD_CARD, GET_DECKS, GET_CARDS} from '../actions/index'

export default function quesions(state={},action){
  switch(action.type){
    case ADD_DECK: 
      return ({
        ...state,
        ...action.deck
      })
      case ADD_CARD: 
      return ({
        ...state,
        ...action.card
      })
      case GET_DECKS: 
      return ({
        ...state,
        ...action.decks
      })
       case GET_CARDS: 
      return ({
        ...state,
        ...action.cards
      })
      default: 
        return state
  }
}
