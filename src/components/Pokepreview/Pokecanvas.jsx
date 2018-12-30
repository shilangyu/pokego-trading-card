import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import Pokesprite from './Pokesprite.jsx'

const config = {
	sprite: {
		offset: { x: 100, y: 100 },
		perRow: 10
	}
}

class Pokecanvas extends Component {
	render() {
		const { spriteUrls } = this.props

		const width = Math.min(config.sprite.perRow, spriteUrls.length) * config.sprite.offset.x
		const height = Math.ceil(spriteUrls.length / config.sprite.perRow) * config.sprite.offset.y
		return (
			<Stage width={width} height={height}>
				<Layer>
					{spriteUrls.map((url, i) => {
						const x = config.sprite.offset.x * (i % config.sprite.perRow)
						const y = config.sprite.offset.y * Math.floor(i / config.sprite.perRow)
						return <Pokesprite key={url} url={url} x={x} y={y} />
					})}
				</Layer>
			</Stage>
		)
	}
}

export default Pokecanvas
