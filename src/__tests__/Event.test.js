import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    let event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });
    test('render date label', () => {
        expect(EventWrapper.find('.date')).toHaveLength(1);
    });
    test('render summary label', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });
    test('render location label', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });
    test('render status label', () => {
        expect(EventWrapper.find('.status')).toHaveLength(1);
    });
    test('an event element is collapsed by default', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
    test('user can expand an event to see its details', () => {
        EventWrapper.setState({
            collapsed: true,
        });
        EventWrapper.find('.details-button').simulate('click')
        expect(EventWrapper.state('collapsed')).toBe(false);
    });
    test('user can collapse an event to hide its details', () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find('.details-button').simulate('click')
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
});
