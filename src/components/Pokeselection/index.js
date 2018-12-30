import React from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'

export default ({
	searchValue,
	updateSearchValue,
	neededPokemons,
	toggleNeededPokemonSelection,
	pokemonList
}) => (
	<>
		<Pokebar searchValue={searchValue} updateSearchValue={updateSearchValue} />
		<Pokelist
			pokemonList={pokemonList}
			selectedPokemons={neededPokemons}
			togglePokemonSelection={toggleNeededPokemonSelection}
		/>
	</>
)
