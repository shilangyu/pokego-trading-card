import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class Pokelist extends Component {
	render() {
		const {
			addPokemonSelection,
			removePokemonSelection,
			rootStyles,
			title,
			dataPrefix
		} = this.props

		return (
			<Paper style={rootStyles}>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Typography align="center" variant="h4">
							{title}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Pokefield
							dataPrefix={dataPrefix}
							addPokemonSelection={addPokemonSelection}
							removePokemonSelection={removePokemonSelection}
						/>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Pokelist
