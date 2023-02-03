

  import React from 'react';
  import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Demo from './demo';
  
  
  const Main = (props) => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" component={Demo}></Route>
            <Route path="/main"></Route>
        </Routes>
      </BrowserRouter>
    );
      
  }
  
  export default Main;