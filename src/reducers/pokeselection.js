export default (state = {}, action) => {
	switch (action.type) {
		case 'TOGGLE_POKEMON_SELECTION': {
			let selectedPokemons = []
			if (selectedPokemons.includes(action.pokemonId))
				selectedPokemons = state.selectedPokemons.filter(e => e !== action.pokemonId)
			else selectedPokemons = [...state.selectedPokemons, action.pokemonId]
			return { ...state, selectedPokemons }
		}

		case 'UPDATE_SEARCH_VALUE': {
			const searchValue = action.value
			return { ...state, searchValue }
		}

		default:
			return state
	}
}
