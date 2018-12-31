import { connect } from 'react-redux'

import urls from '../constants/api.json'

import Pokepreview from '../components/Pokepreview'

const mapStatesToProps = ({ pokeselection }) => ({
	neededSpriteUrls: pokeselection.neededPokemons.map(id => urls.sprite.replace(':id', id)),
	offeredSpriteUrls: pokeselection.offeredPokemons.map(id => urls.sprite.replace(':id', id))
})

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(
	mapStatesToProps,
	mapDispatchToProps
)(Pokepreview)
