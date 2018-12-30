import { createStore } from 'redux'

import rootReducer from './reducers'

export const initialState = {
	pokeselection: {
		searchValue: '',
		selectedPokemons: []
	}
}

export default createStore(rootReducer, initialState)
