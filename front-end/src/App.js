import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";

import { BackgroundImage, MantineProvider, ColorSchemeProvider, useMantineTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

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
import MainCombined from './components/Combined/mainCombined';
import HomeCombined from './components/Combined/pages/homeCombined';
import MainMob from './components/MOB/mainMob';
import MainVob from './components/VOB/mainVOB';
import MainMte from "./components/MTE/mainMTE";
import NotFound from "./components/notfound";
import HomeDashboard from "./components/Combined/pages/homeDashboard";
import AppSettings from "./components/pages/settings";

import backImg from './assets/Cloudy.svg';

// {colors: {
//   brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374']
//   },
//   primaryColor: 'yellow'}

const App = (props) => {
  const theme = useMantineTheme();
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const [colorScheme, setColorScheme] = useLocalStorage({
      key: 'dash-color-scheme',
      defaultValue: 'light',
      getInitialValueInEffect: true,
    });

  return (
    <React.Fragment>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme, primaryColor: 'orange'}}  withGlobalStyles withNormalizeCSS>
          <AuthenticatedTemplate>
            <BrowserRouter>
              <BackgroundImage
                src={backImg}
                radius="sm"
              >
                <TopAppBar></TopAppBar>
                <React.StrictMode>
                  <Routes>
                    <Route path="/" index element={<Main/>}></Route>
                    <Route path="/all" element={<MainCombined/>}>
                      <Route path="/all/homecombined" index element={<HomeCombined/>}></Route>
                      <Route path="/all/homedashboard" element={<HomeDashboard/>}></Route>
                    </Route>
                    <Route path="/mob" element={<MainMob/>}></Route>
                    <Route path="/vob" element={<MainVob/>}></Route>
                    <Route path="/mte" element={<MainMte/>}></Route>
                    <Route path="/settings" element={<AppSettings/>}></Route>
                    <Route path="/*" element={<NotFound/>}></Route>
                  </Routes>
                </React.StrictMode>
              </BackgroundImage>
            </BrowserRouter>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <Login></Login>
          </UnauthenticatedTemplate>
        </MantineProvider>
      </ColorSchemeProvider>
    </React.Fragment> 
  );
}

export default App;
