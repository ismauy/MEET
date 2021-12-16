import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('user is on the main page', () => {

        });
        let EventListWrapper;
        when('user receives a list of upcoming events', () => {
            EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find('.EventList')).toHaveLength(1);
        });
        let EventWrapper;
        then('event element is collapsed by default', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('user is on the main page with a list of the events', () => {

        });
        let EventWrapper;
        when('user clicks on an event', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            const showDetailsButton = EventWrapper.find('.event .details-btn');
            showDetailsButton.simulate('click');
        });

        then('user can expand the event to see its details', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('user has expanded to see the event’s details', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.setState({ collapsed: false });
        });

        when('user clicks to see less details', () => {
            const showDetailsButton = EventWrapper.find('.event .details-btn');
            showDetailsButton.simulate('click');
        });

        then('event’s details will be hidden', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });

});