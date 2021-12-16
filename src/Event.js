import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true
  }
  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return <div className="event">
      <p className="summary">{event.summary}</p>
      <p className="start-date">{event.start.dateTime}</p>
      <p className="location">{event.location}</p>
      <p className="status">{event.status}</p>
      {!collapsed && (<div className="event__Details"><p>{event.description}</p></div>)}
      <button className="details-btn" onClick={this.handleClick}>
        {collapsed ? "Show Details" : "Hide"} </button>
    </div>;

  }
}
export default Event;
