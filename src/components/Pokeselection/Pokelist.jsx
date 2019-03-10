import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import * as store from '../../store'

class Pokelist extends Component {
	state = {
		pokemons: []
	}

	componentDidMount() {
		store.listen(state => this.setState({ pokemons: state[this.props.dataPrefix + 'Pokemons'] }))
	}

	render() {
		const { addPokemonSelection, removePokemonSelection, rootStyles, title } = this.props

		const pokemonsPlusOne = [...this.state.pokemons, { isShiny: false, gender: '', id: null }]

		return (
			<Paper style={rootStyles}>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Typography align="center" variant="h4">
							{title}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						{pokemonsPlusOne.map((poke, i) => (
							<Pokefield
								key={poke.id}
								storeKey={i}
								addPokemonSelection={addPokemonSelection}
								removePokemonSelection={removePokemonSelection}
								{...poke}
							/>
						))}
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Pokelist
