Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number 
Given user is on the main page 
When user hasn’t specified a number of the events
Then thirtytwo is the default number of events

Scenario: User can change the number of events they want to see 
Given user is on the main page
When user change the number of events to see
Then the number of events specified by user is shown