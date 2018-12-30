import config from '../constants/config.json'
import apiUrl from '../constants/api.json'

export const loadPokemonList = {
	type: 'LOAD_POKEMON_LIST',
	payload: (async () => {
		const calls = config.existingPokemon.generations.map(
			e => apiUrl.base + apiUrl.generation.replace(':id', e)
		)
		const responses = await Promise.all(calls.map(e => fetch(e)))
		const results = await Promise.all(responses.map(e => e.json()))

		return results
	})()
}

export const togglePokemonSelection = pokemonId => ({
	type: 'TOGGLE_POKEMON_SELECTION',
	pokemonId
})

export const updateSearchValue = value => ({
	type: 'UPDATE_SEARCH_VALUE',
	value
})
