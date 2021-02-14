import React, { Component } from 'react'

export class DelayedButton extends React.Component {

    handleClick = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };
    render() {

        return (
            <div>
                <button
                    onClick={this.handleClick}>
                    Delayed
                </button>
            </div>
        )
    }
}

export default DelayedButton
