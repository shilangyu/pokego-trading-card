import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import context from '../../context.js'

class Pokebar extends Component {
	static contextType = context

	onChange = event => {
		this.context.updateSearchValue(event.target.value)
	}

	render() {
		const { searchValue } = this.context

		return (
			<TextField
				onChange={this.onChange}
				label="Search"
				fullWidth
				margin="normal"
				variant="outlined"
				value={searchValue}
			/>
		)
	}
}

export default Pokebar
