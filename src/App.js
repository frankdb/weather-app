import React, { Component } from 'react';
import './App.css';
import WeatherData from './components/WeatherData';
import Form from './components/Form';


const API_KEY = "c36de55d2876618e06c7ba365992b895";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: '',
      temperature: null,
      description: null,
      showWeatherData: false,
      error: false
    }
  }

  getWeather = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.elements.city.value},${e.target.elements.country.value}&units=imperial&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({ temperature: data.main.temp, description: data.weather[0].description, city: data.name, country: data.sys.country, error: false, showWeatherData: true}))
    .catch(error => this.setState({error: true, showWeatherData: false}))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md">
          </div>
          <div className="col-md">
            <div className="wrapper">
              <h1 className="title">Thunderbolt and Lightning</h1>
              <p className="tagline">a simple weather app</p>
              <Form getWeather={this.getWeather}/>
              {this.state.showWeatherData ? <WeatherData city={this.state.city} temperature={this.state.temperature} description={this.state.description} /> : null}
              {this.state.error === true ? <h4 style={{textAlign: 'center'}}>No weather data found. Please enter another location.</h4> : null}
            </div>
          </div>
          <div className="col-md">
        </div>
      </div>
      </div>
    );
  }
}

export default App;
