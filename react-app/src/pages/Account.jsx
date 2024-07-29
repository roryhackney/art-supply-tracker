import {signOut} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {UserContext} from "../App.js";

function Account () {
    let {state, update} = useContext(UserContext);
    //if not logged in, go to login instead
    console.log("from account", state.user);
    const navigate = useNavigate();
    React.useEffect(() => {if (state.user == null) navigate("/")});


    if (state.user != null) {
        document.title = "Account | Art Supply Tracker";
        return (
            <>
            <h1>Account</h1>
            <button className="button" type="button" onClick={
                () => {
                    signOut(auth).then(() => {
                        update({user: null});
                        navigate("/");
                    }).catch((err) => {
                        console.log("Unable to log out:", err.message);
                    })
                }
            }>Log Out</button>
            </>
        );
    }
}

export default Account;