import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import SearchIcon from '@material-ui/icons/Search'
import Toast from './dumb/Toast.jsx'
import SaveIcon from '@material-ui/icons/Save'
import VerticalAlignTop from '@material-ui/icons/VerticalAlignTop'
import VerticalAlignBottom from '@material-ui/icons/VerticalAlignBottom'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

import * as store from '../store'

const styles = theme => ({
	appBar: {
		top: 'auto',
		bottom: 0
	},
	toolbar: {
		justifyContent: 'flex-end'
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	content: {
		paddingBottom: 50
	}
})

class Pokeappbar extends React.Component {
	state = {
		hide: true,
		importError: false
	}

	componentDidMount = () => {
		store.listen(state => {
			const hide = state.neededPokemons.length + state.offeredPokemons.length === 0
			if (this.state.hide !== hide) this.setState({ hide })
		})
	}

	onSaveButtonClick = e => {
		const a = document.createElement('a')
		a.href = document.querySelector('canvas').toDataURL('image/png')
		a.download = 'Trading-Card.png'
		a.click()
	}

	onExportButtonClick = e => {
		const { neededPokemons, offeredPokemons } = store.getState()
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
					store.loadTradingCardData(JSON.parse(result))
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
		const { classes, children } = this.props
		const { importError, hide } = this.state

		return (
			<>
				{importError && (
					<Toast variant="error">Could not import the trading card, incorrect file :(</Toast>
				)}
				<div className={classes.content}>{children}</div>
				<AppBar position="fixed" color="primary" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Fab
							color="secondary"
							aria-label="Add"
							className={classes.fabButton}
							onClick={this.onSaveButtonClick}
							disabled={hide}
						>
							<SaveIcon />
						</Fab>
						<div>
							<Tooltip title="Import" placement="top" TransitionComponent={Zoom}>
								<IconButton color="inherit" onClick={this.onImportButtonClick}>
									<VerticalAlignBottom />
								</IconButton>
							</Tooltip>
							<Tooltip title="Export" placement="top" TransitionComponent={Zoom}>
								<IconButton
									color="inherit"
									component={'div'}
									onClick={this.onExportButtonClick}
									disabled={hide}
								>
									<VerticalAlignTop />
								</IconButton>
							</Tooltip>
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
