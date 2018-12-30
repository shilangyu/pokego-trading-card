import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import store from '../../store'

const styles = {
	root: {
		width: '100%',
		height: '30rem',
		overflowY: 'scroll',
		backgroundColor: 'rgb(150, 150, 150)'
	},
	form: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, 130px)',
		gridGap: '10px'
	}
}

class Pokelist extends Component {
	render() {
		const { togglePokemonSelection, selectedPokemons, pokemonList } = this.props
		const { searchValue } = store.getState().pokeselection

		return pokemonList === undefined ? (
			<> Pokemons loading... </>
		) : pokemonList ? (
			<div style={styles.root}>
				<form style={styles.form}>
					{pokemonList.map(({ name, id }) =>
						name.includes(searchValue) ? (
							<div key={name}>
								<Pokefield
									name={name}
									id={id}
									selected={selectedPokemons.includes(id)}
									togglePokemonSelection={togglePokemonSelection}
								/>
							</div>
						) : null
					)}
				</form>
			</div>
		) : (
			<> Error loading the Pokemons! </>
		)
	}
}

export default Pokelist
