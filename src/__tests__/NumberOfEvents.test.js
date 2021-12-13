import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.number-events')).toHaveLength(1);
    });
    test('user has not specified a number, 32 is the default number', () => {
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });
    test('user can change the number of events to see', () => {
        NumberOfEventsWrapper.setState({
            numberOfEvents: 32
        });
        const eventObject = { target: { value: 16 } };
        NumberOfEventsWrapper.find('.number-events').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
    });
});
