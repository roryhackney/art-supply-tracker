import React, {useContext} from 'react';
import RegisterForm from '../RegisterForm';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../App.js';

function Register() {
    const nav = useNavigate();
    let {state, update} = useContext(UserContext);
    console.log("register page:", state.user);
    React.useEffect(() => {if (state.user != null) nav("/home")});

    document.title = "Register | Art Supply Tracker";
    return (
        <>
        <h1>Sign Up</h1>
        <p className='headingText'>for your Art Supply Tracker</p>
        <RegisterForm/>
        </>
    )
}

export default Register;