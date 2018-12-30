import React from 'react'

export default ({ name, id, togglePokemonSelection, selected }) => (
	<>
		<input type="checkbox" name={name} onClick={() => togglePokemonSelection(id)} defaultChecked={selected} />
		<label htmlFor={name}>{name}</label>
	</>
)
