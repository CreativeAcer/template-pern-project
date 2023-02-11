import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAll from './navbar';


function MainCombined() {
  return (
    <React.Fragment>
        <NavbarAll></NavbarAll>
        <Outlet/>
    </React.Fragment>
  );
}

export default MainCombined;
