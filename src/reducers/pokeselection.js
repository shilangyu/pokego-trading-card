export default (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_POKEMON_LIST_FULFILLED': {
			const pokemonList = action.payload.reduce((prev, curr) => {
				const idExtractor = /\/(?<id>\d{1,3})\/$/

				const pokeWithIds = curr.pokemon_species.map(({ name, url }) => ({
					name,
					url,
					id: Number(idExtractor.exec(url).groups.id)
				}))

				return [...prev, ...pokeWithIds]
			}, [])
			pokemonList.sort((a, b) => a.id - b.id)

			return { ...state, pokemonList }
		}

		case 'LOAD_POKEMON_LIST_REJECTED': {
			const pokemonList = null
			return { ...state, pokemonList }
		}

		case 'TOGGLE_NEEDED_POKEMON_SELECTION': {
			let neededPokemons = []
			if (neededPokemons.includes(action.pokemonId))
				neededPokemons = state.neededPokemons.filter(e => e !== action.pokemonId)
			else neededPokemons = [...state.neededPokemons, action.pokemonId]
			return { ...state, neededPokemons }
		}

		case 'UPDATE_SEARCH_VALUE': {
			const searchValue = action.value
			return { ...state, searchValue }
		}

		default:
			return state
	}
}
