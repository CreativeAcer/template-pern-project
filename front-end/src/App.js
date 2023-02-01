import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";

/**
 * MSAL
 */
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

// Styled components import
import CustomizedSlider from "./styled_components/slider";

// app componenst
import TopAppBar from "./components/topappbar";
import Login from "./components/loginpage";
import Main from "./components/mainpage";

const API = process.env.REACT_APP_API_URL;



console.log(API);
function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => {
          setDays(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <React.Fragment>
        <AuthenticatedTemplate>
          <TopAppBar></TopAppBar>
          {/* <Main></Main> */}
          <CustomizedSlider defaultValue={30} />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div>PLEASE SIGN IN</div>
          <Login></Login>
        </UnauthenticatedTemplate>
      </React.Fragment> 
  );
}

export default App;
