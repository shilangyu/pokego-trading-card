import React from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'

export default ({
	searchValue,
	updateSearchValue,
	selectedPokemons,
	togglePokemonSelection,
	pokemonList
}) => (
	<>
		<Pokebar searchValue={searchValue} updateSearchValue={updateSearchValue} />
		<Pokelist
			pokemonList={pokemonList}
			selectedPokemons={selectedPokemons}
			togglePokemonSelection={togglePokemonSelection}
		/>
	</>
)
