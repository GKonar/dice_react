import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		let diceClass = `Die fas fa-dice-${this.props.num} ${this.props.roll && 'Die-animate'}`;

		return (
			<div className="Die-box">
				<i className={diceClass} />
			</div>
		);
	}
}

export default Die;
