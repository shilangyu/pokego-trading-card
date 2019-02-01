import React, { Component } from 'react'
import Pokeselection from './Pokeselection'
import Pokepreview from './Pokepreview'
import Context from '../context'

class App extends Component {
	state = {
		searchValue: '',
		neededPokemons: [],
		offeredPokemons: []
	}

	updateSearchValue = newVal => this.setState({ searchValue: newVal })

	addPokemonSelectionFunc = prefix => (id, variation) => {
		const found = this.state[prefix + 'Pokemons'].find(e => id === e.id)

		if (!found)
			this.setState(prevState => ({
				[prefix + 'Pokemons']: [
					...prevState[prefix + 'Pokemons'],
					{
						id,
						variation
					}
				]
			}))
		else if (variation === '')
			this.setState(prevState => ({
				[prefix + 'Pokemons']: [...prevState[prefix + 'Pokemons'].filter(e => e.id !== id)]
			}))
		else if (variation !== found.variation)
			this.setState(prevState => ({
				[prefix + 'Pokemons']: [
					...prevState[prefix + 'Pokemons'].filter(e => e.id !== id),
					{
						id,
						variation
					}
				]
			}))
	}

	render() {
		return (
			<Context.Provider
				value={{
					...this.state,
					updateSearchValue: this.updateSearchValue,
					addNeededPokemonSelection: this.addPokemonSelectionFunc('needed'),
					addOfferedPokemonSelection: this.addPokemonSelectionFunc('offered')
				}}
			>
				<Pokeselection />
				<Pokepreview />
			</Context.Provider>
		)
	}
}

export default App
