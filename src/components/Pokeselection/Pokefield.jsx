import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'

import { listen } from '../../store'

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
		color: '#e5f442'
	}
})

class Pokefield extends React.Component {
	state = {
		labelWidth: 0,
		value: '',
		visible: true
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
		listen(state => {
			const searched = this.props.name.includes(state.searchValue.toLowerCase())
			if (searched !== this.state.visible) this.setState({ visible: searched })

			const selected = state[this.props.dataPrefix + 'Pokemons'].find(e => e.id === this.props.id)
			if (selected) this.setState({ value: selected.variation })
			else if (!selected && this.state.value !== '') this.setState({ value: '' })
		})
	}

	handleChange = ({ target: { value } }) => {
		this.props.addPokemonSelection(value)
		this.setState({ value })
	}

	render() {
		const { classes, name, hasShiny } = this.props

		return (
			this.state.visible && (
				<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel ref={ref => (this.InputLabelRef = ref)}>{name}</InputLabel>
						<Select
							value={this.state.value}
							onChange={this.handleChange}
							input={<OutlinedInput labelWidth={this.state.labelWidth} />}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={'normal'}>Normal</MenuItem>
							{hasShiny && (
								<MenuItem value={'shiny'}>
									<span className={classes.shiny}>Shiny</span>
								</MenuItem>
							)}
						</Select>
					</FormControl>
				</Grid>
			)
		)
	}
}

export default withStyles(styles)(Pokefield)
