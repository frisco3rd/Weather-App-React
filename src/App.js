// Import react obect from react package in package.json
import React from "react";
//Imports other react components
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
const API_KEY = "f879356f52a3f6dcf8295811ee1eb492";

//creats instance of APP and extends to react.Component
class App extends React.Component{

state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}

// Need async for api call
getWeather = async (e) => { // arrow function
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  // targets values in form//
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  //makes api call....Need tou use AWAT followed by FETCH
  const data = await api_call.json();
  //converting API call to JSON format then assanising  to data
    // Sets data that will be passed to state//
  // if city is true and country is true then run

    if (city && country ) {
    this.setState ({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error:""
   });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    });
  }
}

render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};
{/*Set up prop called getWeather & value is getWeather function*/}


export default App;
