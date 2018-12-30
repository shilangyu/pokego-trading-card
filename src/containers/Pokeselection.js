import { connect } from 'react-redux'

import { markAsSelected } from '../actions'

import Pokeselection from '../components/Pokeselection'

const mapStatesToProps = ({ pokeselection: state }) => ({
	selectedPokemon: [...state.selectedPokemons]
})

const mapDispatchToProps = dispatch => ({
	markAsSelected: pokemonId => dispatch(markAsSelected(pokemonId))
})

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokeselection)
