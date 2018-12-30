import { connect } from 'react-redux'

import { togglePokemonSelection, updateSearchValue } from '../actions'

import Pokeselection from '../components/Pokeselection'

const mapStatesToProps = ({ pokeselection: state }) => ({
	selectedPokemons: [...state.selectedPokemons],
	searchValue: state.searchValue
})

const mapDispatchToProps = dispatch => ({
	togglePokemonSelection: pokemonId => dispatch(togglePokemonSelection(pokemonId)),
	updateSearchValue: value => dispatch(updateSearchValue(value))
})

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
