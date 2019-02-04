import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import pokemonList from '../../constants/pokemonData'

class Pokelist extends Component {
	render() {
		const { addPokemonSelection, rootStyles, title, dataPrefix } = this.props

		return (
			<Paper style={rootStyles}>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Typography align="center" variant="h4">
							{title}
						</Typography>
					</Grid>
					{pokemonList.map(({ name, id }) => (
						<Pokefield
							key={id}
							name={name}
							id={id}
							dataPrefix={dataPrefix}
							addPokemonSelection={variation => addPokemonSelection(id, variation)}
						/>
					))}
				</Grid>
			</Paper>
		)
	}
}

export default Pokelist
