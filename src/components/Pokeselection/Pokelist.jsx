import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import pokemonList from '../../constants/pokemonData'

class Pokelist extends Component {
	render() {
		const { addPokemonSelection, rootStyles } = this.props

		return (
			<Paper style={rootStyles}>
				<Grid container spacing={24}>
					{pokemonList.map(({ name, id }) => (
						<Pokefield
							key={id}
							name={name}
							id={id}
							addPokemonSelection={variation => addPokemonSelection(id, variation)}
						/>
					))}
				</Grid>
			</Paper>
		)
	}
}

export default Pokelist
