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
	notify((id, gender, isShiny) => {
		const found = store[prefix + 'Pokemons'].find(e => id === e.id)

		if (!found)
			store[prefix + 'Pokemons'] = [
				...store[prefix + 'Pokemons'],
				{
					id,
					gender,
					isShiny
				}
			]
		else {
			found.gender = gender === undefined ? found.gender : gender
			found.isShiny = isShiny === undefined ? found.isShiny : isShiny
		}
	})

export const removePokemonSelectionFunc = prefix =>
	notify(id => {
		const found = store[prefix + 'Pokemons'].find(e => id === e.id)

		if (found) store[prefix + 'Pokemons'] = store[prefix + 'Pokemons'].filter(e => e !== found)
	})

export const loadTradingCardData = notify(({ neededPokemons, offeredPokemons }) => {
	store.neededPokemons = neededPokemons
	store.offeredPokemons = offeredPokemons
})
