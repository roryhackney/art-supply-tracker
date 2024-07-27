import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createContext, useState, useEffect} from 'react';
import {auth} from './firebase.js'
import {onAuthStateChanged} from 'firebase/auth';

//pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Demo from './pages/Demo';

import Home from './pages/Home';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';

import Default from './pages/Default';

//user stuff
export const UserContext = createContext(null);

function App() {
    const [myUser, setMyUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setMyUser(user);
            } else {
                setMyUser(null);
            }
        })
    });
    
    return (
        <UserContext.Provider value={myUser}>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="demo" element={<Demo/>}/>

                            <Route path="home" element={<Home/>}/>
                            <Route path="account" element={<Account/>}/>
                            <Route path="wishlist" element={<Wishlist/>}/>
                            
                            <Route path="*" element={<Default/>}/>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;