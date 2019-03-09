import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import MuiDownshift from 'mui-downshift'

import pokemonList from '../../constants/pokemonData'

const items = pokemonList.map(e => ({ label: e.name, id: e.id }))

const styles = theme => ({
	gender: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: theme.spacing.unit
	},
	downshift: {
		margin: theme.spacing.unit
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	},
	shiny: {
		color: '#e9ff00',
		'&$checked': {
			color: '#e9ff00'
		},
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)'
	},
	checked: {}
})

class Pokefield extends React.Component {
	state = {
		pokemonId: null,
		labelWidth: 0,
		filteredItems: items
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
	}

	removeChanges = id => {
		this.props.removePokemonSelection(id)
	}

	onPokemonSearch = changes => {
		if (typeof changes.inputValue === 'string') {
			const filteredItems = items.filter(item =>
				item.label.toLowerCase().includes(changes.inputValue.toLowerCase())
			)
			this.setState({ filteredItems })
		}
		if (this.input && this.props.blurOnSelect) {
			this.input.blur()
		}
		if (changes.selectedItem) {
			this.props.addPokemonSelection(changes.selectedItem.id, '', false)
		}
		if (!changes.selectedItem && this.state.pokemonId) {
			const toRemove = this.state.pokemonId
			this.removeChanges(toRemove)
		}
	}

	onGenderChange = ({ target: { value } }) => {
		this.props.addPokemonSelection(this.props.id, value, undefined)
	}

	onShinyChange = ({ target: { checked } }) => {
		this.props.addPokemonSelection(this.props.id, undefined, checked)
	}

	render() {
		const { classes, isShiny, id, gender } = this.props
		const { labelWidth, filteredItems } = this.state

		return (
			<Grid container>
				<Grid item xs={7}>
					<MuiDownshift
						getInputProps={() => ({
							label: 'Select a pokemon',
							required: true,
							value: id ? items.find(e => e.id === id).label : ''
						})}
						getRootProps={() => ({
							className: classes.downshift
						})}
						items={filteredItems}
						onStateChange={this.onPokemonSearch}
						inputRef={node => {
							this.input = node
						}}
						variant="outlined"
						showEmpty
					/>
				</Grid>
				<Grid item xs={3}>
					<FormControl variant="outlined" className={classes.gender}>
						<InputLabel ref={ref => (this.InputLabelRef = ref)}>gender</InputLabel>
						<Select
							disabled={id === null}
							value={gender}
							onChange={this.onGenderChange}
							input={<OutlinedInput labelWidth={labelWidth} />}
						>
							<MenuItem value={''}>
								<em>Whatever</em>
							</MenuItem>
							<MenuItem value={'male'}>Male</MenuItem>
							<MenuItem value={'female'}>Female</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={2}>
					<Checkbox
						disabled={id === null}
						icon={<StarBorder />}
						checkedIcon={<Star />}
						classes={{
							root: classes.shiny,
							checked: classes.checked
						}}
						onChange={this.onShinyChange}
						checked={isShiny}
					/>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Pokefield)
