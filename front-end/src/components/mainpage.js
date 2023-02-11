

  import React from 'react';
  import {
    Outlet
  } from 'react-router-dom';


  
  
  const Main = (props) => {
    return (
      <React.Fragment>
         <Outlet />
      </React.Fragment>
    );
      
  }
  
  export default Main;