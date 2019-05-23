import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		const diceClass = `Die fas fa-dice-${this.props.num}`;

		return (
			<div className="Die-box">
				<i className={diceClass} />
			</div>
		);
	}
}

export default Die;

// Die - an individual die that takes props and displays the correct face of the die based on props.
