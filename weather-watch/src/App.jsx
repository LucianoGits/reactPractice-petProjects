import { Component } from 'react';
import Input from './components/Input';
import WeatherReport from './components/WeatherReport';
import SetUnits from './components/SetUnits';

class App extends Component {
     render() {
          return (
               <div className="weather-app">
                    <h1>WeatherWatch</h1>
                    <Input />
                    <SetUnits />
                    <WeatherReport />
               </div>
          );
     }
}

export default App;
