// Import react obect from react package in package.json
import React from "react";
//Imports other react components
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

//creats instance of APP and extends to react.Component
class App extends React.Component{
  render(){
    return(
      <div>
      <Titles />
      <Form />
      <Weather />
      </div>
    );
  }
}

export default App;
