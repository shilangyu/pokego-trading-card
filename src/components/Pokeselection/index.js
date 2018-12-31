import React from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'

const styles = {
	pokebar: {},
	pokelist: {
		display: 'inline-block',
		width: '50%',
		height: '30rem',
		overflowY: 'scroll',
		// backgroundColor: 'rgb(150, 150, 150)'
	}
}

export default ({
	searchValue,
	updateSearchValue,
	neededPokemons,
	toggleNeededPokemonSelection,
	offeredPokemons,
	toggleOfferedPokemonSelection,
	pokemonList
}) => (
	<>
		<Pokebar searchValue={searchValue} updateSearchValue={updateSearchValue} /> <br />
		<Pokelist
			rootStyles={styles.pokelist}
			pokemonList={pokemonList}
			selectedPokemons={neededPokemons}
			togglePokemonSelection={toggleNeededPokemonSelection}
		/>
		<Pokelist
			rootStyles={styles.pokelist}
			pokemonList={pokemonList}
			selectedPokemons={offeredPokemons}
			togglePokemonSelection={toggleOfferedPokemonSelection}
		/>
	</>
)
