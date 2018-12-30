import React, { Component } from 'react'
import Pokefield from './Pokefield.jsx'
import store from '../../store'

const styles = {
	form: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, 130px)',
		gridGap: '10px'
	}
}

class Pokelist extends Component {
	render() {
		const { togglePokemonSelection, selectedPokemons, pokemonList, rootStyles } = this.props
		const { searchValue } = store.getState().pokeselection

		return pokemonList === undefined ? (
			<> Pokemons loading... </>
		) : pokemonList ? (
			<div style={rootStyles}>
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
