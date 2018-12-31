import React, { Component } from 'react'

class Pokebar extends Component {
	render() {
		const { searchValue, updateSearchValue } = this.props

		return <input type="search" value={searchValue} onChange={e => updateSearchValue(e.target.value)}/>
	}
}

export default Pokebar
