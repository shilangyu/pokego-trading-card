export default (state = {}, action) => {
	switch (action.type) {
		case 'TOGGLE_POKEMON_SELECTION': {
			let selectedPokemons = []
			if (selectedPokemons.includes(action.id))
				selectedPokemons = state.selectedPokemons.filter(e => e !== action.id)
			else selectedPokemons = [...state.selectedPokemons, action.id]
			return { ...state, selectedPokemons }
		}

		default:
			return state
	}
}
