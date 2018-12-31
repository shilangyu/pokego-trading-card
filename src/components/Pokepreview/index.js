import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import Pokesection from './Pokesection.jsx'

const config = {
	sprite: {
		offset: { x: 100, y: 100 },
		perRow: 10
	}
}

export default class extends Component {
	render() {
		const { spriteUrls } = this.props

		const width = Math.min(config.sprite.perRow, spriteUrls.length) * config.sprite.offset.x
		const height = Math.ceil(spriteUrls.length / config.sprite.perRow) * config.sprite.offset.y
		return (
			<Stage width={width} height={height}>
				<Layer>
					<Pokesection {...this.props} text="Pokemons I'm looking for" config={config} yOffset={0}/>
				</Layer>
			</Stage>
		)
	}
}
