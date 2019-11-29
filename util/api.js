import { AsyncStorage } from 'react-native'
const key = 'ywodd8rpF4TNX+S5eAVXesrasbQzExtw9A/GVSUccHQ='

export function insertDeck({ deck, deckKey }) {

    const decks = AsyncStorage.getItem(key)

    if (decks != null) {
        return AsyncStorage.mergeItem(key, JSON.stringify({
            [deckKey]: deck
        }))
    }
    else {
        return AsyncStorage.setItem(key, JSON.stringify({
            [deckKey]: deck
        }))
    }

}
export function retrieveDecks() {

    return AsyncStorage.getItem(key)

}
export async function insertCard({ deckId, card }) {
    return AsyncStorage.getItem(key)
        .then((results) => {
            const decks = JSON.parse(results);
            decks[deckId]["cards"].push(card);
            AsyncStorage.mergeItem(key, JSON.stringify(decks))
        })
}