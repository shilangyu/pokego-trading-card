import React, { Component } from 'react'
import { Image, Text } from 'react-konva'

class Pokesprite extends Component {
	state = {
		image: null
	}

	componentDidMount() {
		const image = new window.Image()
		image.src = this.props.url
		image.onload = () => this.setState({ image })
	}

	render() {
		const { x, y } = this.props

		return this.state.image ? (
			<Image image={this.state.image} x={x} y={y} />
		) : (
			<Text text="Loading sprite..." x={x} y={y} />
		)
	}
}

export default Pokesprite
