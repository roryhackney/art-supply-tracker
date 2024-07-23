//home page before integrating routing

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {Header} from './Header.js';
// import {LoginForm} from './LoginForm.js';
// import {Footer} from './Footer.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//         <Header isLoggedIn={false}/>
//         <main>
//             <h2>Log In</h2>
//             <p className='headingText'>to your art supply tracker!</p>
//             <LoginForm />
//         </main>
//         <Footer />
//     </>
// );

import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Demo from './pages/Demo';
import Default from './pages/Default';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Login />}/>
                <Route path="register" element={<Register/>}/>
                <Route path="demo" element={<Demo/>}/>
                <Route path="*" element={<Default/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);