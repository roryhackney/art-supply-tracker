import {redirect, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import { UserContext } from "../App.js";

function Home() {
    const navigate = useNavigate();
    let {state, update} = useContext(UserContext);
    //if not logged in, go to login instead
    console.log("from home", state.user);
    React.useEffect(() => {if (state.user == null) navigate("/")});
    console.log(state.user);

    document.title = "Home | Art Supply Tracker";
    return (
        <>
            <h1>Home</h1>
        </>
    );
}

export default Home;