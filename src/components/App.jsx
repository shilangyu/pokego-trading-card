import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Pokeselection from '../containers/Pokeselection'
import store from '../store'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Pokeselection />
			</Provider>
		)
	}
}

export default App
