import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class Pokebar extends Component {
	onChange = event => {
		this.props.updateSearchValue(event.target.value)
	}

	render() {
		const { searchValue } = this.props

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
