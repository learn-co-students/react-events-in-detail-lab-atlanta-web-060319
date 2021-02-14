import React from 'react';

export default class DelayedButton extends React.Component{
    handleDelayClick = (e) => {
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return(
            <div>
                <button onClick={this.handleDelayClick}>Delayed</button>
            </div>
        )
    }
}
