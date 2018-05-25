//Always do first
import React from "react";
//stateless function componenet
// if one argument you do not need () 
const Weather = props => (
    <div className="weather__info">
     {	
       props.city && props.country && <p className="weather__key"> Location: 
         <span className="weather__value"> { props.city }, { props.country } <i class="fas fa-location-arrow"></i>

         </span>
       </p> 
     }
     { 	
       props.temperature && <p className="weather__key"> Temperature: 
         <span className="weather__value"> { props.temperature }&#176;</span>
       </p> 
     }
     { 	
       props.humidity && <p className="weather__key"> Humidity: 
         <span className="weather__value"> { props.humidity }%</span>
       </p> 
     }
  
     { 	
      props.main && <p className="weather__key"> Main: 
        <span className="weather__value"> { props.main } </span>
    </p> 
    }
     { 
       props.error && <p className="weather__error">{ props.error }</p>  
     }
    </div>
  );
export default Weather;
//Exports current component file
