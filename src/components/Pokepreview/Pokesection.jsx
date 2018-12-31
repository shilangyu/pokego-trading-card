import React, { Component } from 'react'
import { Text, Rect } from 'react-konva'
import Pokesprite from './Pokesprite.jsx'

class Pokesection extends Component {
	render() {
		const { spriteUrls, text, config, yOffset, gradientColors } = this.props

		const width = Math.min(config.sprite.perRow, spriteUrls.length) * config.sprite.offset.x
		const height = Math.ceil(spriteUrls.length / config.sprite.perRow) * config.sprite.offset.y

		return (
			<>
				<Rect
					y={yOffset}
					width={width}
					height={height}
					fillLinearGradientStartPoint={{ x: 0, y: 0 }}
					fillLinearGradientEndPoint={{ x: width, y: height }}
					fillLinearGradientColorStops={[0, gradientColors[0], 1, gradientColors[1]]}
				/>
				<Text
					y={yOffset}
					text={text}
					width={width}
					height={height}
					align="center"
					verticalAlign="middle"
					fontFamily="Staatliches"
					fontSize={48}
				/>
				{spriteUrls.map((url, i) => {
					const x = config.sprite.offset.x * (i % config.sprite.perRow)
					const y = config.sprite.offset.y * Math.floor(i / config.sprite.perRow) + yOffset
					return <Pokesprite key={url} url={url} x={x} y={y} />
				})}
			</>
		)
	}
}

export default Pokesection
