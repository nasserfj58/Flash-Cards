import {ADD_DECK, ADD_CARD, GET_DECKS} from '../actions/index'

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
        [action.card["deckId"]]: {
          ...state[action.card["deckId"]],
          cards: [
            ...state[action.card["deckId"]]["cards"],
            action.card
          ]
        }
      })
      case GET_DECKS: 
      return ({
        ...state,
        ...action.decks
      })
      default: 
        return state
  }
}
