import {AsyncStorage} from 'react-native'
const key = 'ywodd8rpF4TNX+S5eAVXesrasbQzExtw9A/GVSUccHQ='

export function insertDeck ({deck,deckKey}){
    console.log(deck)
    console.log(deckKey)
    
    const decks = AsyncStorage.getItem(key)
    if(decks != null){
        return AsyncStorage.mergeItem(key, JSON.stringify({
            [deckKey]: deck
          }))
    }
    else{
       return AsyncStorage.setItem(key, JSON.stringify({
        [deckKey]: deck
      }))
    }

}
