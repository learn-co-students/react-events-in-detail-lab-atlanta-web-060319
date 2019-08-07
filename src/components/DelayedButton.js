// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    
    handleClick = (e) => {
        let event = e
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay) 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delay</button>
            </div>
        )
    }
}