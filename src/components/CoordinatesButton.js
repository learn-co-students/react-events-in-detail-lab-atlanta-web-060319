// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{


    render(){
        return(
            <div>
                <button onClick={e => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinates Button</button>
            </div>
        )
    }
}