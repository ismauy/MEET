import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './nprogress.css';
import { InfoAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all',
      offLineMsg: '',
      errorMsg: '',
      showWelcomeScreen: undefined
    };
  }

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    this.updateOfflineMsg();
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({
      showWelcomeScreen: !(code || isTokenValid)
    });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, numberOfEvents),
            locations: extractLocations(events)
          });
        }
      });
    }
  }

  updateOfflineMsg = () => {
    if (!navigator.onLine) {
      this.setState({
        offLineMsg: 'Events are loaded from the cache'
      })
    } else {
      this.setState({
        offLineMsg: ''
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    this.updateOfflineMsg();
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location
        });
      }
    });
  }

  updateNumberOfEvents = (e) => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;
    if (newNumber < 1 || newNumber > 32) {
      return this.setState({
        errorMsg: 'Number must be between 1 and 32',
        numberOfEvents: 0,
      });
    } else {
      this.setState({
        errorMsg: "",
        numberOfEvents: newNumber,
      });
      this.updateEvents(this.state.currentLocation);
    }
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
          errorMsg={this.state.errorMsg} />
        <InfoAlert text={this.state.offLineMsg} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
