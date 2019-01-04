import React from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'

const styles = {
	pokebar: {},
	pokelist: {
		display: 'inline-block',
		width: '50%',
		maxWidth: '50%',
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
	<>
		<Pokebar searchValue={searchValue} updateSearchValue={updateSearchValue} /> <br />
		<Pokelist
			rootStyles={styles.pokelist}
			pokemonList={pokemonList}
			selectedPokemons={neededPokemons}
			addPokemonSelection={addNeededPokemonSelection}
		/>
		<Pokelist
			rootStyles={styles.pokelist}
			pokemonList={pokemonList}
			selectedPokemons={offeredPokemons}
			addPokemonSelection={addOfferedPokemonSelection}
		/>
	</>
)
