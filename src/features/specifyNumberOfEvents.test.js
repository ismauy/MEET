import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('user is on the main page', () => {

        });
        let AppWrapper;
        when('user hasn’t specified a number of the events', () => {
            AppWrapper = mount(<App />);
        });

        then('thirtytwo is the default number of events', () => {
            expect(AppWrapper.state('numberOfEvents')).toEqual(32);
        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('user is on the main page', () => {
            AppWrapper = mount(<App />);
        });

        when('user change the number of events to see', () => {
            const inputEventsNumber = { target: { value: 16 } };
            AppWrapper.find('.number-events').simulate('change', inputEventsNumber);
            AppWrapper.update();
        });

        then('the number of events specified by user is shown', () => {
            expect(AppWrapper.state('numberOfEvents')).toEqual(16);
        });
    });


});