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

	addNeededPokemonSelection = (id, variation) =>
		this.setState(prevState => ({
			neededPokemons: [
				...prevState.neededPokemons,
				{
					id,
					variation
				}
			]
		}))

	addOfferedPokemonSelection = (id, variation) =>
		this.setState(prevState => ({
			offeredPokemons: [
				...prevState.offeredPokemons,
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
					addNeededPokemonSelection: this.addNeededPokemonSelection,
					addOfferedPokemonSelection: this.addOfferedPokemonSelection,
				}}
			>
				<Pokeselection />
				<Pokepreview />
			</Context.Provider>
		)
	}
}

export default App
