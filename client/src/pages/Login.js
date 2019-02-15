import React from 'react';
import LoginFields from '../components/LoginFields';

function Login(props) {
    return(
        <LoginFields handleLogin={props.handleLogin} />
    );
};

export default Login;