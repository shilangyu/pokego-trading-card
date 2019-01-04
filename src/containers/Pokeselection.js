import { connect } from 'react-redux'

import {
	addNeededPokemonSelection,
	updateSearchValue,
	loadPokemonList,
	addOfferedPokemonSelection,
	removeNeededPokemonSelection,
	removeOfferedPokemonSelection
} from '../actions'

import Pokeselection from '../components/Pokeselection'

const mapStatesToProps = ({ pokeselection }) => ({
	...pokeselection
})

const mapDispatchToProps = dispatch => {
	dispatch(loadPokemonList)

	return {
		addNeededPokemonSelection: (pokemonId, variation) =>
			dispatch(addNeededPokemonSelection(pokemonId, variation)),
		addOfferedPokemonSelection: (pokemonId, variation) =>
			dispatch(addOfferedPokemonSelection(pokemonId, variation)),
		removeNeededPokemonSelection: pokemonId => dispatch(removeNeededPokemonSelection(pokemonId)),
		removeOfferedPokemonSelection: pokemonId => dispatch(removeOfferedPokemonSelection(pokemonId)),
		updateSearchValue: value => dispatch(updateSearchValue(value))
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
