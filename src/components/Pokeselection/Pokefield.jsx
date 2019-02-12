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

import * as store from '../../store'
import pokemonList from '../../constants/pokemonData'

const items = pokemonList.map(e => ({label: e.name, value: e.id}))

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
		gender: '',
		labelWidth: 0,
		value: '',
		visible: true,
		shiny: false,
		filteredItems: []
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
		store.listen(state => {
			const searched = this.props.name.includes(state.searchValue.toLowerCase())
			if (searched !== this.state.visible) this.setState({ visible: searched })

			const selected = state[this.props.dataPrefix + 'Pokemons'].find(e => e.id === this.props.id)
			if (selected) this.setState({ value: selected.variation })
			else if (!selected && this.state.value !== '') this.setState({ value: '' })
		})
	}

	onPokemonSearch = changes => {
    if (typeof changes.inputValue === 'string') {
      const filteredItems = items.filter(item => item.label.toLowerCase().includes(changes.inputValue.toLowerCase()));
      this.setState({ filteredItems });
    }
    if (this.input && this.props.blurOnSelect) {
      this.input.blur();
    }
  };

	onGenderChange = ({ target: { value } }) => {
		this.setState({ gender: value })
	}

	onShinyChange = ({ target: { checked } }) => {
		this.setState({ shiny: checked })
	}

	render() {
		const { classes, name, hasShiny } = this.props
		const { gender, visible, labelWidth, shiny, filteredItems } = this.state

		return (
			visible && (
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
								{hasShiny && <MenuItem value={'female'}>Female</MenuItem>}
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
		)
	}
}

export default withStyles(styles)(Pokefield)
