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
		const { neededSpriteUrls, offeredSpriteUrls } = this.props

		const width1 = Math.min(config.sprite.perRow, neededSpriteUrls.length) * config.sprite.offset.x
		const height1 =
			Math.ceil(neededSpriteUrls.length / config.sprite.perRow) * config.sprite.offset.y

		const width2 = Math.min(config.sprite.perRow, offeredSpriteUrls.length) * config.sprite.offset.x
		const height2 =
			Math.ceil(offeredSpriteUrls.length / config.sprite.perRow) * config.sprite.offset.y
		return (
			<Stage width={Math.max(width1, width2)} height={height1 + height2}>
				<Layer>
					<Pokesection
						spriteUrls={neededSpriteUrls}
						text="Pokemons I'm looking for"
						config={config}
						yOffset={0}
						gradientColors={['#113977', '#4689f2']}
					/>
					<Pokesection
						spriteUrls={offeredSpriteUrls}
						text="Pokemons I can give"
						config={config}
						yOffset={height1}
						gradientColors={['#166021', '#46f15f']}
					/>
				</Layer>
			</Stage>
		)
	}
}