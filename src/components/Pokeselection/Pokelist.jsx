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

		const searchedPokemons = (pokemonList || []).reduce(
			(prev, { id, name }) => {
				if (name.includes(searchValue.toLowerCase())) {
					const { variation = '' } =
						selectedPokemons.find(e => e.pokemonId === id) || {}
					prev.push({ name, id, variation })
				}
				return prev
			},
			[]
		)

		return (
			<Paper style={rootStyles}>
				{pokemonList === undefined ? (
					<>
						<LinearProgress />
						<Toast variant="info">Loading pokémons...</Toast>
					</>
				) : pokemonList ? (
					<Grid container spacing={24}>
						{searchedPokemons.map(({ name, id, variation }) => (
							<Grid item key={name} xs={12} sm={6} md={4} lg={3} xl={2}>
								<Pokefield
									name={name}
									id={id}
									addPokemonSelection={variation =>
										addPokemonSelection(id, variation)
									}
									variation={variation}
									removePokemonSelection={() => removePokemonSelection(id)}
								/>
							</Grid>
						))}
					</Grid>
				) : (
					<Toast variant="error">Error loading the Pokemons!</Toast>
				)}
			</Paper>
		)
	}
}

export default Pokelist
