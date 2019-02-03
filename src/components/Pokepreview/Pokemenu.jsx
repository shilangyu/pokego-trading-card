import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'

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
		// console.log(document.querySelector('canvas').toDataURL('image/png'))
	}

	render() {
		const { classes } = this.props

		return (
			<>
				<Button variant="contained" className={classes.button} onClick={this.onSaveButtonClick}>
					<SaveIcon className={classes.leftIcon} />
					Save
				</Button>
			</>
		)
	}
}

export default withStyles(styles)(Pokemenu)
