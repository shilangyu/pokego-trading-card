import React, { Component } from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'
import Grid from '@material-ui/core/Grid'

import { addPokemonSelectionFunc } from '../../store'

const styles = {
	pokelist: {
		height: '30rem',
		overflowY: 'scroll',
		overflowX: 'hidden'
	}
}

export default class extends Component {
	render() {
		return (
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Pokebar /> <br />
				</Grid>
				<Grid item xs={6}>
					<Pokelist
						title="Pokemons you are looking for"
						rootStyles={styles.pokelist}
						addPokemonSelection={addPokemonSelectionFunc('needed')}
					/>
				</Grid>
				<Grid item xs={6}>
					<Pokelist
						title="Pokemons you can give"
						rootStyles={styles.pokelist}
						addPokemonSelection={addPokemonSelectionFunc('offered')}
					/>
				</Grid>
			</Grid>
		)
	}
}
