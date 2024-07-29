import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from '../App';

const Wishlist = () => {
    const navigate = useNavigate();
    //if not logged in, go to login instead
    const {state, update} = useContext(UserContext);
    console.log("wishlist page:", state.user);
    React.useEffect(() => {if (state.user == null) navigate("/")});
    
    document.title = "Wishlist | Art Supply Tracker";
    return (
        <>
        <h1>Wishlist</h1>
        </>
    )
}

export default Wishlist;