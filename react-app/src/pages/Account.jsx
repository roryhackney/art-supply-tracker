import {signOut} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import HeaderLoggedIn from "../HeaderLoggedIn.js";
import Footer from '../Footer.js';
// import React, {useContext} from "react";
// import {UserContext} from "../App.js";

function Account () {
    //removing context stuff and using auth instead
    // let {state, update} = useContext(UserContext);
    // //if not logged in, go to login instead
    // console.log("from account", state.user);

    const navigate = useNavigate();
    // React.useEffect(() => {if (state.user == null) navigate("/")});
    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (! user) {
            navigate("/");
        }
    })})


    // if (state.user != null) {
    document.title = "Account | Art Supply Tracker";
    return (
        <>
        <HeaderLoggedIn/>
        <main>
            <h1>Account</h1>
            <button className="button" type="button" onClick={
                () => {
                    signOut(auth).then(() => {
                        // update({user: null});
                        navigate("/");
                    }).catch((err) => {
                        console.log("Unable to log out:", err.message);
                    })
                }
            }>Log Out</button>
        </main>
        <Footer />
        </>
    );
    // }
}

export default Account;