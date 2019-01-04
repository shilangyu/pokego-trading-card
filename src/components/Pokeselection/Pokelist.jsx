import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import store from '../../store'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import Toast from '../dumb/Toast.jsx'

class Pokelist extends Component {
	render() {
		const {
			addPokemonSelection,
			removePokemonSelection,
			selectedPokemons,
			pokemonList,
			rootStyles
		} = this.props
		const { searchValue } = store.getState().pokeselection

		return (
			<Paper style={rootStyles}>
				{pokemonList === undefined ? (
					<>
						<LinearProgress /> <br />
						<Toast variant="info">Loading pokémons...</Toast>
					</>
				) : pokemonList ? (
					<Grid container spacing={24}>
						{pokemonList.map(({ name, id }) =>
							name.includes(searchValue) ? (
								<Grid item key={name} xs={12} sm={6} md={4} lg={3} xl={2}>
									<Pokefield
										name={name}
										id={id}
										selected={selectedPokemons.includes(id)}
										addPokemonSelection={variation => addPokemonSelection(id, variation)}
										removePokemonSelection={() => removePokemonSelection(id)}
									/>
								</Grid>
							) : null
						)}
					</Grid>
				) : (
					<> Error loading the Pokemons! </>
				)}
			</Paper>
		)
	}
}

export default Pokelist
