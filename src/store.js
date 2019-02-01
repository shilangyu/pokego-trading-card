const store = {
	searchValue: '',
	neededPokemons: [],
	offeredPokemons: []
}
const listeners = []
const notify = action => (...args) => {
	action(...args)
	listeners.forEach(func => func(getState()))
}
export const getState = () => JSON.parse(JSON.stringify(store))
export const listen = func => listeners.push(func)

export const updateSearchValue = notify(newVal => (store.searchValue = newVal))

export const addPokemonSelectionFunc = prefix =>
	notify((id, variation) => {
		const found = store[prefix + 'Pokemons'].find(e => id === e.id)

		if (!found)
			store[prefix + 'Pokemons'] = [
				...store[prefix + 'Pokemons'],
				{
					id,
					variation
				}
			]
		else if (variation === '')
			store[prefix + 'Pokemons'] = [...store[prefix + 'Pokemons'].filter(e => e.id !== id)]
		else if (variation !== found.variation)
			store[prefix + 'Pokemons'] = [
				...store[prefix + 'Pokemons'].filter(e => e.id !== id),
				{
					id,
					variation
				}
			]
	})
