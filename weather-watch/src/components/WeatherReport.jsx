const WeatherReport = ({ weatherData }) => {
     //  const {
     //       location,
     //       icon,
     //       conditions,
     //       temp,
     //       temp_max,
     //       temp_min,
     //       feels_like,
     //       wind_speed,
     //       wind_direction,
     //       pressure,
     //       humidity,
     //  } = weatherData;
     return (
          <>
               <div className="weather-report">
                    <h2 className="big"></h2>
                    <h3 className="conditions"></h3>
                    <img />
                    <div className="temperature">
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                    </div>
                    <div className="wind">
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                    </div>
                    <div className="wind">
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                         <div>
                              <p></p>
                              <h2></h2>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default WeatherReport;
