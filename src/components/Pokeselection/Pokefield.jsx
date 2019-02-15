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
	formControl: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: theme.spacing.unit,
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	},
	shiny: {
		color: '#e9ff00',
		'&$checked': {
			color: '#e9ff00'
		}
	},
	checked: {}
})

class Pokefield extends React.Component {
	state = {
		pokemonId: null,
		gender: '',
		shiny: false,
		labelWidth: 0,
		filteredItems: []
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
	}

	sendChanges = () => {
		const { gender, shiny, pokemonId } = this.state

		this.props.addPokemonSelection(pokemonId, gender, shiny)
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
			this.setState({ pokemonId: changes.selectedItem.id }, () => this.sendChanges())
		}
		if (!changes.selectedItem && this.state.pokemonId) {
			const toRemove = this.state.pokemonId
			this.setState({ pokemonId: null, gender: '', shiny: false }, () =>
				this.removeChanges(toRemove)
			)
		}
	}

	onGenderChange = ({ target: { value } }) => {
		this.setState({ gender: value }, () => this.sendChanges())
	}

	onShinyChange = ({ target: { checked } }) => {
		this.setState({ shiny: checked }, () => this.sendChanges())
	}

	render() {
		const { classes } = this.props
		const { gender, labelWidth, shiny, filteredItems } = this.state

		return (
			<Grid container>
				<Grid item xs={7}>
					<MuiDownshift
						items={filteredItems}
						onStateChange={this.onPokemonSearch}
						inputRef={node => {
							this.input = node
						}}
					/>
				</Grid>
				<Grid item xs={3}>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel ref={ref => (this.InputLabelRef = ref)}>gender</InputLabel>
						<Select
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
						icon={<StarBorder />}
						checkedIcon={<Star />}
						classes={{
							root: classes.shiny,
							checked: classes.checked
						}}
						onChange={this.onShinyChange}
						checked={shiny}
					/>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Pokefield)
