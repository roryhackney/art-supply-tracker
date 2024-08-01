import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {createContext, StrictMode, useState} from 'react';
import { StrictMode } from 'react';

//pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Demo from './pages/Demo';

import Home from './pages/Home';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';

import Default from './pages/Default';
import CompleteSignIn from './pages/CompleteSignIn';
import EmailSignIn from './pages/EmailSignIn.jsx';


//user stuff
// export const UserContext = createContext();

//tutorial used reducer, I'm just gonna use state for now
// const reducer = (state, pair) => ({...state, ...pair});

//so when you click the links, it remembers ur user account
//but if you manually type in / (for login route) it loses the user info

//when you are logged out, it successfully redirects to login if you type in a protected route
//when you are logged in, reloading or typing in any route, including account, home, etc loses your login
//maybe reloading the website causes you to lose context?

function App() {
    // const [state, update] = useState({user: null});

    return (
        <StrictMode>
            {/* <UserContext.Provider value={{state, update}}> */}
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="demo" element={<Demo/>}/>

                            <Route path="complete-sign-in" element={<CompleteSignIn/>}/>
                            <Route path="email-sign-in" element={<EmailSignIn/>}/>

                            <Route path="home" element={<Home/>}/>
                            <Route path="account" element={<Account/>}/>
                            <Route path="wishlist" element={<Wishlist/>}/>
                            
                            <Route path="*" element={<Default/>}/>
                        </Route>
                    </Routes>
            </BrowserRouter>
            {/* </UserContext.Provider> */}
        </StrictMode>
    );
}

export default App;