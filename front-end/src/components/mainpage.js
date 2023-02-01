

  import React from 'react';
  import {
    Routes,
    Route
  } from "react-router-dom";
import Demo from './demo';
  
  
  const Main = (props) => {
    return (
        <Routes>
            <Route path="/" component={Demo}></Route>
            <Route path="/main"></Route>
        </Routes>
    );
      
  }
  
  export default Main;