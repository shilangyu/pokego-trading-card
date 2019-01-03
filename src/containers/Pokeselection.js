import { connect } from 'react-redux'

import {
	addNeededPokemonSelection,
	updateSearchValue,
	loadPokemonList,
	addOfferedPokemonSelection
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
		updateSearchValue: value => dispatch(updateSearchValue(value))
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
