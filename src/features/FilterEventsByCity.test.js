import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasn’t searched for a city, show upcoming events from all cities', ({ given, when, then }) => {
        given('user hasn’t searched for any city', () => {

        });

        when('user opens the app', () => {

        });

        then('user should see a list of all upcoming events', () => {

        });
    });

    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        given('main page is open', () => {

        });

        when('user starts typing in the city textbox', () => {

        });

        then('user should see a list of cities (suggestions) that match what they typed', () => {

        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        given('the user was typing “Berlin” in the city textbox.', () => {

        });

        and('the list of suggested cities is showing', () => {

        });

        when('the user selects a city from the list', () => {

        });

        then('their city should be changed to that city.', () => {

        });

        and('the user should receive a list of upcoming events in that city', () => {

        });
    });
});