import { connect } from 'react-redux'

import { toggleNeededPokemonSelection, updateSearchValue, loadPokemonList, toggleOfferedPokemonSelection } from '../actions'

import Pokeselection from '../components/Pokeselection'

const mapStatesToProps = ({ pokeselection }) => ({
	...pokeselection
})

const mapDispatchToProps = dispatch => {
	dispatch(loadPokemonList)

	return {
		toggleNeededPokemonSelection: pokemonId => dispatch(toggleNeededPokemonSelection(pokemonId)),
		toggleOfferedPokemonSelection: pokemonId => dispatch(toggleOfferedPokemonSelection(pokemonId)),
		updateSearchValue: value => dispatch(updateSearchValue(value))
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
