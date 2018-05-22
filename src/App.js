// Import react obect from react package in package.json
import React from "react";
//Imports other react components
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
const API_KEY = "f879356f52a3f6dcf8295811ee1eb492";

//creats instance of APP and extends to react.Component
class App extends React.Component{
// Need async for api call


getWeather = async (e) => { // arrow function
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  //makes api call....Need tou use AWAT followed by FETCH
  const Data = await api_call.json();
  //converting API call to JSON format then assanising  to data
  console.log(Data);
}

  render(){
    return(
      <div>
      <Titles />
      <Form getWeather={this.getWeather} />
        {/*Set up prop called getWeather & value is getWeather function*/}

      <Weather />
      </div>
    );
  }
}

export default App;
