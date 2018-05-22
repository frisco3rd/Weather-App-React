// Import react obect from react package in package.json

import React from "react";

//creats instance of APP and extends to react.Component
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <p>Puppet Boy wonderland</p>
      </div>
    );
  }
}

export default App;
