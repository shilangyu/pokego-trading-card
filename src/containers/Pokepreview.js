import { connect } from 'react-redux'

// import { togglePokemonSelection, updateSearchValue, loadPokemonList } from '../actions'

import Pokepreview from '../components/Pokepreview'

const mapStatesToProps = ({ pokepreview: state }) => ({
	...state
})

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokepreview)
