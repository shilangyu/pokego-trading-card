import { connect } from 'react-redux'

import { togglePokemonSelection, updateSearchValue, loadPokemonList } from '../actions'

import Pokeselection from '../components/Pokeselection'

const mapStatesToProps = ({ pokeselection }) => ({
	...pokeselection
})

const mapDispatchToProps = dispatch => {
	dispatch(loadPokemonList)

	return {
		togglePokemonSelection: pokemonId => dispatch(togglePokemonSelection(pokemonId)),
		updateSearchValue: value => dispatch(updateSearchValue(value))
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
