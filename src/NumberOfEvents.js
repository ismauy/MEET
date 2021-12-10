import React, { Component } from "react";

class NumberEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: value,
        });
    };

    render() {
        return <div>
            <input
                type="number"
                className="number-events"
                value={this.state.numberOfEvents}
                onChange={this.handleInputChanged}
            />
        </div>;

    }
}

export default NumberEvents;
