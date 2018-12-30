import React, { Component } from 'react'
import config from '../constants/config.json'
import apiUrl from '../constants/api.json'
import Pokefield from './Pokefield.jsx'

const styles = {
	root: {
		width: '100%',
		height: '30rem',
		'overflow-y': 'scroll',
		'background-color': 'rgb(150, 150, 150)'
	}
}

class Pokelist extends Component {
	state = {
		pokemons: []
	}

	async componentDidMount() {
		const calls = config.existingPokemon.generations.map(
			e => apiUrl.base + apiUrl.generation.replace(':id', e)
		)
		const responses = await Promise.all(calls.map(e => fetch(e)))
		const results = await Promise.all(responses.map(e => e.json()))

		const pokemons = results.reduce((prev, curr) => [...prev, ...curr.pokemon_species], [])
		pokemons.sort((...compared) => {
			const idExtractor = /\/(?<id>\d{1,3})\/$/

			const ids = compared.map(e => Number(idExtractor.exec(e.url).groups.id))

			return ids[0] - ids[1]
		})

		this.setState({
			pokemons: pokemons
		})
	}

	render() {
		return (
			<div style={styles.root}>
				<form>
					{this.state.pokemons.map(({ name }) => (
						<Pokefield key={name} name={name} />
					))}
				</form>
			</div>
		)
	}
}

export default Pokelist
