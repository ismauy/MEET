Feature: Show/Hide an event’s details

Scenario: An event element is collapsed by default 
Given user is on the main page 
When user receives a list of upcoming events 
Then event element is collapsed by default

Scenario: User can expand an event to see its details 
Given user is on the main page with a list of the events 
When user clicks on an event 
Then user can expand the event to see its details

Scenario: User can collapse an event to hide its details 
Given user has expanded to see the event’s details 
When user clicks to see less details 
Then event’s details will be hidden