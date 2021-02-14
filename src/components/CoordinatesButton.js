// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButtons extends Component {
	constructor(props) {
		super(props)
		// console.log(this.props)
		this.state = {onReceiveCoordinates: this.props.onReceiveCoordinates}
	}

	handleClickEvent = (event) => {
		this.state.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
		return (
			<button type="button" onClick={this.handleClickEvent}>Click Me!</button>
		)
	}
}