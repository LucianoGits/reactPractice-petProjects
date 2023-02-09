import React, { Component } from 'react';
import WeatherCard from './components/WeatherCard';

class App extends Component {
     state = {
          city: null,
     };
     render() {
          return (
               <div className="app">
                    <button
                         className="getDataBtn"
                         onClick={() => this.setState({ city: 'New York' })}
                    >
                         New York
                    </button>
                    <button
                         className="getDataBtn"
                         onClick={() => this.setState({ city: 'Los Angeles' })}
                    >
                         Los Angeles
                    </button>
                    <WeatherCard city={this.state.city} />
               </div>
          );
     }
}

export default App;
