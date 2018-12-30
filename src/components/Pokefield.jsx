import React, { Component } from 'react'

class Pokefield extends Component {
	render() {
		return (
			<>
				<input type="checkbox" name={this.props.name} />
				<label for={this.props.name}>{this.props.name}</label>
			</>
		)
	}
}

export default Pokefield
