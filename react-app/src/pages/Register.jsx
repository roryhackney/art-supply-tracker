import React, {useEffect} from 'react';
import RegisterForm from '../RegisterForm';
import {useNavigate} from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase.js';
import Header from "../Header";

function Register() {
    const nav = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                nav("/home");
            }
        })
    });

    document.title = "Register | Art Supply Tracker";
    return (
        <>
            <Header isLoggedIn={false}/>
            <main>
                <h1>Sign Up</h1>
                <p className='headingText'>for your Art Supply Tracker</p>
                <RegisterForm/>
            </main>
        </>
    )
}

export default Register;