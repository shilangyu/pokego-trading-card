import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import context from '../../context'
import pokemonList from '../../constants/pokemonData'

class Pokelist extends Component {
	static contextType = context

	render() {
		const { addPokemonSelection, selectedPokemons, rootStyles } = this.props
		const { searchValue } = this.context

		const searchedPokemons = pokemonList.reduce((prev, curr) => {
			if (curr.name.includes(searchValue.toLowerCase())) {
				const { variation = '' } = selectedPokemons.find(e => e.pokemonId === curr.id) || {}
				prev.push({ ...curr, variation })
			}
			return prev
		}, [])

		return (
			<Paper style={rootStyles}>
				<Grid container spacing={24}>
					{searchedPokemons.map(({ name, id, variation }) => (
						<Grid item key={name} xs={12} sm={6} md={4} lg={3} xl={2}>
							<Pokefield
								name={name}
								id={id}
								addPokemonSelection={variation => addPokemonSelection(id, variation)}
								variation={variation}
							/>
						</Grid>
					))}
				</Grid>
			</Paper>
		)
	}
}

export default Pokelist
