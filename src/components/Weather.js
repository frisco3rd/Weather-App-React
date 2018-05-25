//Always do first
import React from "react";
//stateless function componenet
// if one argument you do not need () 
const Weather = props => (
      <div>
      {/*use && as a operational conditinal/// IF BLACK true(&&) render*/}
        { props.city && props.country &&  <p>Location: { props.city}, { props.country }</p>}
        { props.temperature && <p>Temprature: { props.temperature }</p>}
        { props.humidity && <p>Humidity: { props.humidity }</p>}
        { props.description && <p>Conditions: { props.description }</p>}
        { props.error && <p> { props.error } </p>}
      </div>
);
export default Weather;
//Exports current component file
