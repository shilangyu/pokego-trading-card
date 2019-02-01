import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import pokemonList from '../../constants/pokemonData'
import context from '../../context'

class Pokelist extends Component {
	static contextType = context

	render() {
		const { addPokemonSelection, rootStyles } = this.props
		const { searchValue } = this.context

		const searchedPokemons = pokemonList.filter(({ name }) =>
			name.includes(searchValue.toLowerCase())
		)

		return (
			<Paper style={rootStyles}>
				<Grid container spacing={24}>
					{searchedPokemons.map(({ name, id }) => (
						<Grid item key={id} xs={12} sm={6} md={4} lg={3} xl={2}>
							<Pokefield
								name={name}
								id={id}
								addPokemonSelection={variation => addPokemonSelection(id, variation)}
							/>
						</Grid>	
					))}
				</Grid>
			</Paper>
		)
	}
}

export default Pokelist
