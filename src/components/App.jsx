import React, { Component } from 'react'
import Pokeselection from './Pokeselection'
import Pokepreview from './Pokepreview'

class App extends Component {
	render() {
		return (
			<>
				<Pokeselection />
				<Pokepreview />
			</>
		)
	}
}

export default App
