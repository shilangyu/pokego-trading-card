import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import rootReducer from './reducers'

export const initialState = {
	pokeselection: {
		searchValue: '',
		neededPokemons: [],
		pokemonList: undefined
	},
	pokepreview: {}
}

const middleware = applyMiddleware(promise())

export default createStore(rootReducer, initialState, middleware)
