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

		case 'ADD_NEEDED_POKEMON_SELECTION': {
			let neededPokemons = [...state.neededPokemons]

			if (neededPokemons.find(e => e.pokemonId === action.pokemonId))
				neededPokemons = state.neededPokemons.map(e =>
					e.pokemonId === action.pokemonId
						? {
								pokemonId: action.pokemonId,
								variation: action.variation
						  }
						: e
				)
			else
				neededPokemons.push({
					pokemonId: action.pokemonId,
					variation: action.variation
				})

			return { ...state, neededPokemons }
		}

		case 'ADD_OFFERED_POKEMON_SELECTION': {
			let offeredPokemons = [...state.offeredPokemons]

			if (offeredPokemons.find(e => e.pokemonId === action.pokemonId))
				offeredPokemons = state.offeredPokemons.map(e =>
					e.pokemonId === action.pokemonId
						? {
								pokemonId: action.pokemonId,
								variation: action.variation
						  }
						: e
				)
			else
				offeredPokemons.push({
					pokemonId: action.pokemonId,
					variation: action.variation
				})

			return { ...state, offeredPokemons }
		}

		case 'UPDATE_SEARCH_VALUE': {
			const searchValue = action.value
			return { ...state, searchValue }
		}

		default:
			return state
	}
}
