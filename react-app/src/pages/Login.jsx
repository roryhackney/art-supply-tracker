// import React, {useContext} from 'react';
import {useEffect} from 'react';
import LoginForm from '../LoginForm';
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase';
import HeaderLoggedOut from '../HeaderLoggedOut';
import Footer from '../Footer';
// import { UserContext } from '../App.js';

function Login() {
    const nav = useNavigate();
    // const {state, update} = useContext(UserContext);
    // console.log("login page:", state.user);
    // React.useEffect(() => {if (state.user != null) nav("/home")});

    //if logged in, go to home instead
    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (user) {
            nav("/home");
        }
    })})

    document.title = "Log In | Art Supply Tracker";
    return (
        <>
        <HeaderLoggedOut/>
        <main>
            <h2>Log In</h2>
            <p className='headingText'>to your art supply tracker!</p>
            <LoginForm />
        </main>
        <Footer/>
        </>
    );
}

export default Login;