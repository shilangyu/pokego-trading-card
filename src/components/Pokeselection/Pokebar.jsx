import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

import { updateSearchValue } from '../../store'

class Pokebar extends Component {
	onChange = e => updateSearchValue(e.target.value)

	hideKeyboard = e => e.keyCode === 13 && e.target.blur()

	render() {
		return (
			<TextField
				onChange={this.onChange}
				label="Search"
				fullWidth
				margin="normal"
				variant="outlined"
				id="searchBar"
				onKeyUp={this.hideKeyboard}
			/>
		)
	}
}

export default Pokebar
