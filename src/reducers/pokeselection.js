export default (state = {}, action) => {
	switch (action.type) {
		case 'MARK_AS_SELECTED': {
			const selectedPokemons = [...state.selectedPokemons, action.id]
			return { ...state, selectedPokemons }
		}

		default:
			return state
	}
}
