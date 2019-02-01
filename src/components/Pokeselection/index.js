import React, { Component } from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'
import Grid from '@material-ui/core/Grid'

import context from '../../context'

const styles = {
	pokelist: {
		height: '30rem',
		overflowY: 'scroll',
		overflowX: 'hidden'
	}
}

export default class extends Component {
	static contextType = context

	render() {
		return (
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Pokebar /> <br />
				</Grid>
				<Grid item xs={6}>
					<Pokelist
						rootStyles={styles.pokelist}
						addPokemonSelection={this.context.addNeededPokemonSelection}
					/>
				</Grid>
				<Grid item xs={6}>
					<Pokelist
						rootStyles={styles.pokelist}
						addPokemonSelection={this.context.addOfferedPokemonSelection}
					/>
				</Grid>
			</Grid>
		)
	}
}
