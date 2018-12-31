import React from 'react'
const styles = {
	input: {
		float: 'left'
	},
	label: {
		float: 'right'
	}
}
export default ({ name, id, togglePokemonSelection, selected }) => (
	<button
		onClick={e => {
			e.preventDefault()
			togglePokemonSelection(id)
		}}
	>
		<input style={styles.input} type="checkbox" name={name} checked={selected} readOnly />
		<label htmlFor={name} style={styles.label}>{name}</label>
	</button>
)
