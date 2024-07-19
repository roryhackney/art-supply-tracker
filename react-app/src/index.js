import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './Header.js';
import {LoginForm} from './LoginForm.js';
import {Footer} from './Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header isLoggedIn={false}/>
        <main>
            <h2>Log In</h2>
            <p className='headingText'>to your art supply tracker!</p>
            <LoginForm />
            <Footer />
        </main>
    </>
);