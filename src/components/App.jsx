import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Pokeselection from './Pokeselection'
import Pokepreview from './Pokepreview'
import Pokeappbar from './Pokeappbar'

class App extends Component {
	render() {
		return (
			<>
				<CssBaseline />
				<Pokeselection />
				<Pokepreview />
				<Pokeappbar />
			</>
		)
	}
}

export default App
