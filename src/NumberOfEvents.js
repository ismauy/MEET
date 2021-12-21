import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {



    render() {
        return <div className="numberOfEvents" >
            <Row>
                <Col><span>Number of Events</span>
                    <input
                        type="number"
                        className="number-events"
                        value={this.props.numberOfEvents}
                        onChange={(e) => this.props.updateNumberOfEvents(e)}
                    /></Col>
            </Row>
            <Row>
                <Col>
                    <ErrorAlert text={this.props.errorMsg} />
                </Col>
            </Row>
        </div>;

    }
}


export default NumberOfEvents;
