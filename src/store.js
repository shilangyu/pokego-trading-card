const store = {
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

export const addPokemonSelectionFunc = prefix =>
	notify((storeKey, id, gender, isShiny) => {
		const found = store[prefix + 'Pokemons'].find(e => storeKey === e.storeKey)

		if (!found)
			store[prefix + 'Pokemons'] = [
				...store[prefix + 'Pokemons'],
				{
					storeKey,
					id,
					gender,
					isShiny
				}
			]
		else {
			found.id = id === undefined ? found.id : id
			found.gender = gender === undefined ? found.gender : gender
			found.isShiny = isShiny === undefined ? found.isShiny : isShiny
		}
	})

export const removePokemonSelectionFunc = prefix =>
	notify(storeKey => {
		const found = store[prefix + 'Pokemons'].find(e => storeKey === e.storeKey)

		if (found) store[prefix + 'Pokemons'] = store[prefix + 'Pokemons'].filter(e => e !== found)
	})

export const loadTradingCardData = notify(({ neededPokemons, offeredPokemons }) => {
	store.neededPokemons = neededPokemons
	store.offeredPokemons = offeredPokemons
})
