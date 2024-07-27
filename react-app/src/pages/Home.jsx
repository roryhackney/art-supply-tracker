import Header from "../Header";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Home() {
    const navigate = useNavigate();
    //if not logged in, go to login instead
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            }
        })
    });

    document.title = "Home | Art Supply Tracker";
    return (
        <>
        <Header isLoggedIn={true}/>
        <main>
            <h1>Home</h1>
        </main>
        </>
    );
}

export default Home;