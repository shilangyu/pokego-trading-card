import { connect } from 'react-redux'

import { togglePokemonSelection } from '../actions'

import Pokeselection from '../components/Pokeselection'

const mapStatesToProps = ({ pokeselection: state }) => ({
	selectedPokemons: [...state.selectedPokemons]
})

const mapDispatchToProps = dispatch => ({
	togglePokemonSelection: pokemonId => dispatch(togglePokemonSelection(pokemonId))
})

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
