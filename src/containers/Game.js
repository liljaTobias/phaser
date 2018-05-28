import React, { Component } from 'react'
import Phaser from 'phaser'

import logo from '../assets/logo.png'

class Game extends Component {
	constructor(props) {
		super()
	}
	componentDidMount() {
		const config = {
			type: Phaser.AUTO,
			parent: 'phaser-example',
			width: 800,
			height: 600,
			scene: { preload: this.preload, create: this.create }
		}
		this.state = {
			game: new Phaser.Game(config)
		}
	}

	preload() {
		this.load.image('logo', logo)
	}

	create() {
		const logo = this.add.image(400, 150, 'logo')

		this.tweens.add({
			targets: logo,
			y: 450,
			duration: 2000,
			ease: 'Power2',
			yoyo: true,
			loop: -1
		})
	}

	render() {
		return (
			<div>
				<h1>Game</h1>
			</div>
		)
	}
}

export default Game
