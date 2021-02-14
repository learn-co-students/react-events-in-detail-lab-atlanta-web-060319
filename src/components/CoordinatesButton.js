import React from 'react';

export default class CoordinatesButton extends React.Component{
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Coords</button>
            </div>
        )
    }
}
