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

	addPokemonSelectionFunc = prefix => (id, variation) =>
		this.setState(prevState => ({
			[prefix + 'Pokemons']: [
				...prevState[prefix + 'Pokemons'],
				{
					id,
					variation
				}
			]
		}))

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
