import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

import { updateSearchValue } from '../../store'

class Pokebar extends Component {
	onChange = event => {
		updateSearchValue(event.target.value)
	}

	render() {
		return (
			<TextField
				onChange={this.onChange}
				label="Search"
				fullWidth
				margin="normal"
				variant="outlined"
			/>
		)
	}
}

export default Pokebar
