import React from 'react'
import Pokelist from './Pokelist.jsx'
import Pokebar from './Pokebar.jsx'

export default ({ searchValue, updateSearchValue, selectedPokemons, togglePokemonSelection }) => (
	<>
		<Pokebar searchValue={searchValue} updateSearchValue={updateSearchValue} />
		<Pokelist selectedPokemons={selectedPokemons} togglePokemonSelection={togglePokemonSelection} />
	</>
)
