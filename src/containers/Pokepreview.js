import { connect } from 'react-redux'

import urls from '../constants/api.json'

import Pokepreview from '../components/Pokepreview'

const mapStatesToProps = ({ pokeselection }) => ({
	neededSpriteUrls: pokeselection.neededPokemons.map(({ pokemonId, variation }) =>
		urls.sprite.replace(':id', (variation === 'shiny' ? 'shiny/' : '') + pokemonId)
	),
	offeredSpriteUrls: pokeselection.offeredPokemons.map(({ pokemonId, variation }) =>
		urls.sprite.replace(':id', (variation === 'shiny' ? 'shiny/' : '') + pokemonId)
	)
})

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokepreview)
