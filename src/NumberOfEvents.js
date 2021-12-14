import React, { Component } from "react";

class NumberOfEvents extends Component {



    render() {
        return <div className="numberOfEvents" >
            <span>Number of Events</span>
            <input
                type="number"
                className="number-events"
                value={this.props.numberOfEvents}
                onChange={(e) => this.props.updateNumberOfEvents(e)}
            />
            <span>
                {this.props.errorMsg}
            </span>
        </div>;

    }
}


export default NumberOfEvents;
