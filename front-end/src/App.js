import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";

import { Footer, MantineProvider } from '@mantine/core';

/**
 * MSAL
 */
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

/**
* REACT ROUTER
*/
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Styled components import

// app componenst
import Login from "./components/loginpage";
import Main from "./components/mainpage";
import TopAppBar from './components/topappbar';
import MainCombined from './components/Combined/mainComboned';
import MainMob from './components/MOB/mainMob';
import MainVob from './components/VOB/mainVOB';
import MainMte from "./components/MTE/mainMTE";
import NotFound from "./components/notfound";

const API = process.env.REACT_APP_API_URL;

console.log(API);
const App = (props) => {
  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${API}/test`)
  //     .then(
  //       (response) => {
  //         setDays(response.data);
  //       },
  //       (error) => console.log("get", error)
  //     )
  //     .catch((c) => console.warn("catch", c));
  // }, []);
  return (
    <React.Fragment>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AuthenticatedTemplate>
          <BrowserRouter>
            <TopAppBar></TopAppBar>
            <React.StrictMode>
              <Routes>
                <Route path="/" index element={<Main/>}></Route>
                <Route path="/all" element={<MainCombined/>}></Route>
                <Route path="/mob" element={<MainMob/>}></Route>
                <Route path="/vob" element={<MainVob/>}></Route>
                <Route path="/mte" element={<MainMte/>}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
              </Routes>
            </React.StrictMode>
          </BrowserRouter>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div>PLEASE SIGN IN</div>
          <Login></Login>
        </UnauthenticatedTemplate>
      </MantineProvider>
    </React.Fragment> 
  );
}

export default App;
