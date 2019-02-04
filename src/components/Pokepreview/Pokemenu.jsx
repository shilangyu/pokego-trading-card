import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Toast from '../dumb/Toast.jsx'

import { getState, loadTradingCardData } from '../../store'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	leftIcon: {
		marginRight: theme.spacing.unit
	}
})

class Pokemenu extends Component {
	state = {
		importError: false
	}

	onSaveButtonClick = e => {
		const a = document.createElement('a')
		a.href = document.querySelector('canvas').toDataURL('image/png')
		a.download = 'Trading-Card.png'
		a.click()
	}

	onExportButtonClick = e => {
		const { neededPokemons, offeredPokemons } = getState()
		const exportData = { neededPokemons, offeredPokemons }

		const a = document.createElement('a')
		const file = new Blob([JSON.stringify(exportData)], { type: 'text/plain' })
		a.href = URL.createObjectURL(file)
		a.download = 'Exported-Trading-Card.json'
		a.click()
	}

	onImportButtonClick = () => {
		const input = document.createElement('input')
		input.type = 'file'
		input.onchange = ({ target: { files } }) => {
			if (files.length !== 1 || !/.*\.json$/.test(files[0].name)) {
				this.setState({ importError: true })
				return
			}
			const reader = new FileReader()

			reader.onload = ({ target: { result } }) => {
				try {
					loadTradingCardData(JSON.parse(result))
				} catch {
					this.setState({ importError: true })
					return
				}
			}

			reader.readAsText(files[0])
		}
		input.click()
	}

	render() {
		const { classes } = this.props
		const { importError } = this.state

		return (
			<>
				{importError && (
					<Toast variant="error">Could not import the trading card, incorrect file :(</Toast>
				)}
				<Button variant="contained" className={classes.button} onClick={this.onSaveButtonClick}>
					<SaveIcon className={classes.leftIcon} />
					Save
				</Button>
				<Button variant="contained" className={classes.button} onClick={this.onExportButtonClick}>
					<KeyboardArrowUp className={classes.leftIcon} />
					Export
				</Button>
				<Button variant="contained" className={classes.button} onClick={this.onImportButtonClick}>
					<KeyboardArrowDown className={classes.leftIcon} />
					Import
				</Button>
			</>
		)
	}
}

export default withStyles(styles)(Pokemenu)
