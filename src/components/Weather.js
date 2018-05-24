//Always do first
import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div>
      <p>Location: {this.props.city}, {this.props.country}</p>
        <p>Temprature: {this.props.temperature}</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Conditions: {this.props.description}</p>

      </div>
    );
  }
}

export default Weather;
//Exports current component file
