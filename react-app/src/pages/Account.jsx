import Header from "../Header";
import {signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Account () {
    const navigate = useNavigate();
    //if not logged in, go to login instead
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            }
        })
    });
    document.title = "Account | Art Supply Tracker";
    return (
        <>
        <Header isLoggedIn={true}/>
        <main>
            <h1>Account</h1>
            <button className="button" type="button" onClick={() => {
                signOut(auth).then(() => {
                    navigate("/");
                }).catch((error) => {
                    console.log("Unable to log out:", error.message);
                })
            }}>Log Out</button>
        </main>
        </>
    );
}

export default Account;