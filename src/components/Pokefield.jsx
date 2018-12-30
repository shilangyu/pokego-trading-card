import React, { Component } from 'react'

class Pokefield extends Component {
	render() {
		const { name } = this.props
		return (
			<>
				<input type="checkbox" name={name} />
				<label htmlFor={name}>{name}</label>
			</>
		)
	}
}

export default Pokefield
