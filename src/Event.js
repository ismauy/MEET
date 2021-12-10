import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true
  }
  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return <div>
      <span className="date">{event.start.dateTime}</span>
      <span className="summary">{event.summary}</span>
      <span className="location">{event.location}</span>
      <span className="status">{event.status}</span>
      <button className="details-button" onClick={this.handleClick}>
        {collapsed ? "Show Details" : "Hide"} </button>
    </div>;

  }
}
export default Event;
