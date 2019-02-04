import React, { Component } from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'
import Grid from '@material-ui/core/Grid'

import * as store from '../../store'

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
						title="Pokémons you are looking for"
						dataPrefix="needed"
						rootStyles={styles.pokelist}
						addPokemonSelection={store.addPokemonSelectionFunc('needed')}
					/>
				</Grid>
				<Grid item xs={6}>
					<Pokelist
						title="Pokémons you can give"
						dataPrefix="offered"
						rootStyles={styles.pokelist}
						addPokemonSelection={store.addPokemonSelectionFunc('offered')}
					/>
				</Grid>
			</Grid>
		)
	}
}
