# meet

A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. It uses the Google Calendar API to fetch upcoming events.

## Live Version
https://ismauy.github.io/meet/

## USER STORIES AND SCENARIOS 

**Feature 1 : Filter events by city**

User Story: As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city 

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities 
Given: 	user hasn’t searched for any city 
When: 	user opens the app 
Then: 	user should see a list of all upcoming events 

Scenario 2: User should see a list of suggestions when they search for a city 
Given: 	main page is open 
When: 	user starts typing in the city textbox 
Then: 	user should see a list of cities (suggestions) that match what they typed 

Scenario 3: User can select a city from the suggested list 
Given: 	the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing 
When: 	the user selects a city from the list 
Then: 	their city should be changed to that city. And the user should receive a list of upcoming events in that city 


**Feature 2: Show/Hide an event’s details** 

User Story: As a user, I should be able to show/hide event details, so that I can see more/less information about an event. 

Scenario 1: An event element is collapsed by default 
Given: 	user is on the main page 
When:	user receives a list of upcoming events 
Then: 	event element is collapsed by default 

Scenario 2: User can expand an event to see its details 
Given: 	user is on the main page with a list of the events 
When: 	user clicks on an event 
Then: 	user can expand the event to see its details 

Scenario 3: User can collapse an event to hide its details 
Given: 	user has expanded to see the event’s details 
When: 	user clicks to see less details 
Then: 	event’s details will be hidden 


**Feature 3: Specify number of events**

User Story: As a user, I should be able to specify the number of events I want to view in the app, so that I can see more or fewer events in the events list at once

Scenario 1: When user hasn’t specified a number, 32 is the default number 
Given: 	user is on the main page 
When: 	user hasn’t specified a number of the events 
Then: 	32 is the default number of events

Scenario 2: User can change the number of events they want to see 
Given: 	user is on the main page
When: 	user change the number of events to see 
Then: 	the number of events specified by user is shown


**Feature 4: Use the app when offline**

User Story: As a user, I should be able to use the app when offline, so that I can see the events I viewed the last time I was online

Scenario1 : Show cached data when there’s no internet connection
Given: 	user opens the app
When: 	no internet connection
Then: 	data from previous session is showed

Scenario 2: Show error when user changes the settings (city, time range)
Given: 	user is offline
When: 	user changes the settings
Then: 	user receives an error message

**Feature 5: Data visualization**

User Story: As a user, I should be able to see a chart showing the upcoming events in each city, so that I know what events are organized in which city 

Scenario 1: Show a chart with the number of upcoming events in each city
Given: 	user is on the main page
When:	user would like to see the incoming events
Then:	user sees the chart of the  upcoming events in each city
