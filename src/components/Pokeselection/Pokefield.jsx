import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
		labelWidth: 0
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
	}

	handleChange = event => {
		const { value } = event.target

		if (value === this.props.variation) return

		if (value) this.props.addPokemonSelection(value)
		else this.props.removePokemonSelection()
	}

	render() {
		const { classes, name, variation } = this.props

		return (
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel ref={ref => (this.InputLabelRef = ref)}>{name}</InputLabel>
				<Select
					value={variation}
					onChange={this.handleChange}
					input={<OutlinedInput labelWidth={this.state.labelWidth} />}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={'normal'}>Normal</MenuItem>
					<MenuItem value={'shiny'}>
						<span className={classes.shiny}>Shiny</span>
					</MenuItem>
				</Select>
			</FormControl>
		)
	}
}

export default withStyles(styles)(Pokefield)
