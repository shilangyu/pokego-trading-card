import React from 'react'

export default ({ name, id, togglePokemonSelection, selected }) => (
	<div onClick={() => togglePokemonSelection(id)}>
		<input type="checkbox" name={name} checked={selected} readOnly />
		<label htmlFor={name}>{name}</label>
	</div>
)
