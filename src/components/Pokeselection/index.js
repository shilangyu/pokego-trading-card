import React from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'
import Grid from '@material-ui/core/Grid'

const styles = {
	pokelist: {
		height: '30rem',
		overflowY: 'scroll',
		overflowX: 'hidden'
	}
}

export default ({
	searchValue,
	updateSearchValue,
	neededPokemons,
	addNeededPokemonSelection,
	offeredPokemons,
	addOfferedPokemonSelection,
	pokemonList
}) => (
	<Grid container spacing={24}>
		<Grid item xs={12}>
			<Pokebar searchValue={searchValue} updateSearchValue={updateSearchValue} /> <br />
		</Grid>
		<Grid item xs={6}>
			<Pokelist
				rootStyles={styles.pokelist}
				pokemonList={pokemonList}
				selectedPokemons={neededPokemons}
				addPokemonSelection={addNeededPokemonSelection}
			/>
		</Grid>
		<Grid item xs={6}>
			<Pokelist
				rootStyles={styles.pokelist}
				pokemonList={pokemonList}
				selectedPokemons={offeredPokemons}
				addPokemonSelection={addOfferedPokemonSelection}
			/>
		</Grid>
	</Grid>
)
