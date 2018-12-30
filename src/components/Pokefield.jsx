import React, { Component } from 'react'

class Pokefield extends Component {
	render() {
		return (
			<>
				<input type="checkbox" /> {this.props.name}
			</>
		)
	}
}

export default Pokefield
