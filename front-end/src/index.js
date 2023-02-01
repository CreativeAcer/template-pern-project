import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * MSAL
 */
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
/**
* REACT ROUTER
*/
//import { BrowserRouter } from 'react-router-dom';

export const msalInstance = new PublicClientApplication(msalConfig);

const AppProvider = () => (
  <MsalProvider instance={msalInstance}>
    {/* <BrowserRouter> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </BrowserRouter> */}
  </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
