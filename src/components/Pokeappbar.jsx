import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import SearchIcon from '@material-ui/icons/Search'
import Toast from './dumb/Toast.jsx'
import SaveIcon from '@material-ui/icons/Save'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

import { getState, loadTradingCardData } from '../store'

const styles = theme => ({
	appBar: {
		top: 'auto',
		bottom: 0
	},
	toolbar: {
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	}
})

class Pokeappbar extends React.Component {
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

	onSearchButtonClick = e => document.querySelector('#searchBar').focus()

	render() {
		const { classes } = this.props
		const { importError } = this.state

		return (
			<>
				{importError && (
					<Toast variant="error">Could not import the trading card, incorrect file :(</Toast>
				)}
				<AppBar position="fixed" color="primary" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Fab
							color="secondary"
							aria-label="Add"
							className={classes.fabButton}
							onClick={this.onSaveButtonClick}
						>
							<SaveIcon />
						</Fab>
						<div>
							<IconButton color="inherit" onClick={this.onImportButtonClick}>
								<KeyboardArrowDown />
							</IconButton>
							<IconButton color="inherit" onClick={this.onExportButtonClick}>
								<KeyboardArrowUp />
							</IconButton>
							<Tooltip title="Search" placement="top" TransitionComponent={Zoom}>
								<IconButton color="inherit" onClick={this.onSearchButtonClick}>
									<SearchIcon />
								</IconButton>
							</Tooltip>
						</div>
					</Toolbar>
				</AppBar>
			</>
		)
	}
}

export default withStyles(styles)(Pokeappbar)
