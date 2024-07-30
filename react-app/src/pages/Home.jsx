import {useNavigate} from "react-router-dom";
// import React, {useContext} from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
// import { UserContext } from "../App.js";
import {auth} from '../firebase';
import HeaderLoggedIn from "../HeaderLoggedIn";
import Footer from "../Footer";

function Home() {
    const navigate = useNavigate();
    // let {state, update} = useContext(UserContext);
    // console.log("from home", state.user);
    // React.useEffect(() => {if (state.user == null) navigate("/")});
    // console.log(state.user);

    //if not logged in, go to login instead
    useEffect(() => auth.onAuthStateChanged((user) => {
        if (! user) {
            navigate("/");
        }
    }))

    document.title = "Home | Art Supply Tracker";
    return (
        <>
            <HeaderLoggedIn/>
            <main>
                <h1>Home</h1>
            </main>
            <Footer/>
        </>
    );
}

export default Home;