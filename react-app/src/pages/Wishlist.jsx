import Header from "../Header";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Wishlist = () => {
    const navigate = useNavigate();
    //if not logged in, go to login instead
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            }
        })
    });
    
    document.title = "Wishlist | Art Supply Tracker";
    return (
        <>
            <Header isLoggedIn={true}/>
            <main>
                <h1>Wishlist</h1>
            </main>
        </>
    )
}

export default Wishlist;