import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'

import { getState } from '../../store'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	leftIcon: {
		marginRight: theme.spacing.unit
	}
})

class Pokemenu extends Component {
	onSaveButtonClick(e) {
		const a = document.createElement('a')
		a.href = document.querySelector('canvas').toDataURL('image/png')
		a.download = 'Trading-Card.png'
		a.click()
	}

	onExportButtonClick(e) {
		const { neededPokemons, offeredPokemons } = getState()
		const exportData = { neededPokemons, offeredPokemons }

		const a = document.createElement('a')
		const file = new Blob([JSON.stringify(exportData)], { type: 'text/plain' })
		a.href = URL.createObjectURL(file)
		a.download = 'Exported-Trading-Card.json'
		a.click()
	}

	render() {
		const { classes } = this.props

		return (
			<>
				<Button variant="contained" className={classes.button} onClick={this.onSaveButtonClick}>
					<SaveIcon className={classes.leftIcon} />
					Save
				</Button>
				<Button variant="contained" className={classes.button} onClick={this.onExportButtonClick}>
					<KeyboardArrowUp className={classes.leftIcon} />
					Export
				</Button>
			</>
		)
	}
}

export default withStyles(styles)(Pokemenu)
