// import React, { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
// import {UserContext} from '../App';
import {auth} from '../firebase';
import HeaderLoggedIn from "../HeaderLoggedIn";
import Footer from "../Footer";

const Wishlist = () => {
    const navigate = useNavigate();
    //if not logged in, go to login instead
    // const {state, update} = useContext(UserContext);
    // console.log("wishlist page:", state.user);
    // React.useEffect(() => {if (state.user == null) navigate("/")});

    useEffect(() => {auth.onAuthStateChanged((user) => {
        if(! user) {
            navigate("/");
        }
    })})
    
    document.title = "Wishlist | Art Supply Tracker";
    return (
        <>
        <HeaderLoggedIn/>
        <main>
            <h2>Wishlist</h2>
        </main>
        <Footer/>
        </>
    )
}

export default Wishlist;