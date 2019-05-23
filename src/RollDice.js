import React, { Component } from 'react';

import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super();
		this.state = {
			DiceOne: 'one',
			DiceTwo: 'one'
		};
		this.roll = this.roll.bind(this);
	}

	static defaultProps = {
		diceNumArr: ['one', 'two', 'three', 'four', 'five', 'six']
	};

	roll() {
		this.setState({
			DiceOne: this.props.diceNumArr[Math.floor(Math.random() * 6)],
			DiceTwo: this.props.diceNumArr[Math.floor(Math.random() * 6)]
		});
	}

	render() {
		return (
			<div>
				<Die num={this.state.DiceOne} />
				<Die num={this.state.DiceTwo} />
				<button onClick={this.roll}>Roll Roll Baby</button>
			</div>
		);
	}
}

export default RollDice;

// RollDice - a parent component (rendered by App) that renders the dice and a button to roll.
