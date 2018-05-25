//Must Have First
import React from "react";

//stateless function componenet only if no state is needed
// if one argument you do not need () 
const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;
//Exports current component file
