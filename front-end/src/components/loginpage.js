import React from 'react';
import { useMsal } from "@azure/msal-react";

/**
 * Styled Component import
 */
 import { Button } from '../styled_components/button-styled';

const Login = (props) => {
    const { instance, inProgress } = useMsal();

    if (inProgress === "login") {
        return (<span>Login is currently in progress!</span>)
    } else {
        return (
            <Button onClick={() => instance.loginPopup({})}>Login</Button>
        );
    }
    
}

export default Login;