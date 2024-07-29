import React, {useContext} from 'react';
import LoginForm from '../LoginForm';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../App.js';

function Login() {
    const nav = useNavigate();
    //if logged in, go to home instead
    const {state, update} = useContext(UserContext);
    console.log("login page:", state.user);
    React.useEffect(() => {if (state.user != null) nav("/home")});

    document.title = "Log In | Art Supply Tracker";
    return (
        <>
        <h2>Log In</h2>
        <p className='headingText'>to your art supply tracker!</p>
        <LoginForm />
        </>
    );
}

export default Login;