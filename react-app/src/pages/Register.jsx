// import React, {useContext} from 'react';
import { useEffect } from 'react';
import RegisterForm from '../RegisterForm';
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
// import { UserContext } from '../App.js';
import {auth} from '../firebase';
import HeaderLoggedOut from '../HeaderLoggedOut';
import Footer from '../Footer';

function Register() {
    const nav = useNavigate();
    // let {state, update} = useContext(UserContext);
    // console.log("register page:", state.user);
    // React.useEffect(() => {if (state.user != null) nav("/home")});

    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (user) {
            nav("/home");
        }
    })})

    document.title = "Register | Art Supply Tracker";
    return (
        <>
        <HeaderLoggedOut/>
        <main>
            <h2>Sign Up</h2>
            <p className='headingText'>for your Art Supply Tracker</p>
            <RegisterForm/>
        </main>
        <Footer/>
        </>
    )
}

export default Register;