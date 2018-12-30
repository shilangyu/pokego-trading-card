import React, { Component } from 'react'
import config from '../constants/config.json'
import apiUrl from '../constants/api.json'
import Pokefield from './Pokefield.jsx'

const styles = {
	root: {
		width: '100%',
		height: '30rem',
		overflowY: 'scroll',
		backgroundColor: 'rgb(150, 150, 150)'
	},
	form: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, 130px)',
		gridGap: '10px'
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

		const pokemons = results.reduce((prev, curr) => {
			const idExtractor = /\/(?<id>\d{1,3})\/$/

			const pokeWithIds = curr.pokemon_species.map(({ name, url }) => ({
				name,
				url,
				id: Number(idExtractor.exec(url).groups.id)
			}))

			return [...prev, ...pokeWithIds]
		}, [])
		pokemons.sort((a, b) => a.id - b.id)

		this.setState({
			pokemons: pokemons
		})
	}

	render() {
		return (
			<div style={styles.root}>
				<form style={styles.form}>
					{this.state.pokemons.map(({ name }) => (
						<div key={name}>
							<Pokefield name={name} />
						</div>
					))}
				</form>
			</div>
		)
	}
}

export default Pokelist
