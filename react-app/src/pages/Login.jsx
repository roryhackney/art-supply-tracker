import React, {useEffect} from 'react';
import LoginForm from '../LoginForm';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase.js';
import {useNavigate} from 'react-router-dom';
import Header from "../Header";

function Login() {
    const nav = useNavigate();
    //if logged in, go to home instead
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                nav("/home");
            }
        })
    });

    document.title = "Log In | Art Supply Tracker";
    return (
        <>
            <Header isLoggedIn={false}/>
            <main>
                <h2>Log In</h2>
                <p className='headingText'>to your art supply tracker!</p>
                <LoginForm />
            </main>
        </>
    );
}

export default Login;