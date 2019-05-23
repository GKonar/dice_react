import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super();
		this.state = {
			dieOne: 'six',
			dieTwo: 'six',
			isRolling: false
		};
		this.roll = this.roll.bind(this);
	}

	static defaultProps = {
		diceNumArr: ['one', 'two', 'three', 'four', 'five', 'six']
	};

	roll() {
		this.setState({
			dieOne: this.props.diceNumArr[Math.floor(Math.random() * 6)],
			dieTwo: this.props.diceNumArr[Math.floor(Math.random() * 6)],
			isRolling: true
		});

		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 500);
	}

	render() {
		let button;
		if (this.state.isRolling) {
			button = (
				<button className="RollDice-waitBtn" onClick={this.roll} disabled>
					Rolling...
				</button>
			);
		} else {
			button = (
				<button className="RollDice-btn" onClick={this.roll}>
					Roll Roll Baby!
				</button>
			);
		}

		return (
			<div className="RollDice">
				<div className="RollDice-box">
					<Die num={this.state.dieOne} roll={this.state.isRolling} />
					<Die num={this.state.dieTwo} roll={this.state.isRolling} />
				</div>
				{button}
			</div>
		);
	}
}

export default RollDice;
