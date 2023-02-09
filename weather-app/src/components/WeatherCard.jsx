import React, { Component } from 'react';
import weatherService from './WeatherService';

class WeatherCard extends Component {
     state = {
          data: null,
     };
     fetchWeather = city => {
          weatherService(city).then(data =>
               this.setState({
                    data,
               })
          );
     };

     componentDidMount = () => this.fetchWeather();

     componentDidUpdate(prevProps) {
          if (prevProps.city !== this.props.city) {
               this.fetchWeather(this.props.city);
          }
     }

     render() {
          return this.state.data ? (
               <div className="weather-card">
                    <h1 id="city">{this.state.data.city}</h1>
                    <div id="conditions">{this.state.data.conditions}</div>
                    <div id="current-temp">{this.state.data.current}&deg;</div>
                    <div className="min-max">
                         <div id="min-temp">
                              Min {this.state.data.minTemp}&deg;
                         </div>
                         <div id="max-temp">
                              Min {this.state.data.maxTemp}&deg;
                         </div>
                    </div>
               </div>
          ) : (
               <h4>No Data Available</h4>
          );
     }
}

export default WeatherCard;
