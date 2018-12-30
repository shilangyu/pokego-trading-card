import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import Pokesprite from './Pokesprite.jsx'

class Pokecanvas extends Component {
	state = {
		image: null
	}

	render() {
		return (
			<Stage width={1000} height={200}>
				<Layer>
					<Pokesprite url={'https://konvajs.github.io/assets/yoda.jpg'} x={200} />
				</Layer>
			</Stage>
		)
	}
}

export default Pokecanvas
