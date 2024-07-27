import React, {useEffect} from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase.js';
import Header from '../Header.js';
import { getAuth } from 'firebase/auth';

function Demo() {
    document.title = "Demonstration | Art Supply Tracker";
    
    const base = (
        <main>
            <h1>Demonstration</h1>
            <p className='headingText'>of the Art Supply Tracker</p>
        </main>
    );

    let isLoggedIn = false;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn = true;
            } else {
                isLoggedIn = false;
            }
        })
    });

    return (
        <>
        <Header isLoggedIn={isLoggedIn}/>
        {base}
        </>
    );
}

export default Demo;