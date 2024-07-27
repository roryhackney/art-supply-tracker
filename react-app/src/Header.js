import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./App";

function Header(props) {
    let currentUser = useContext(UserContext);
    // console.log("From header, current user:", currentUser);
    let menu = LoginMenu();
    if(currentUser) {
       menu = Menu();
    }
    
    return (
        <header>
            <img src="./astlogo.png" alt="Logo for Art Supply Tracker" width="425" height="378"/>
            <h1>Art Supply Tracker</h1>
            <nav>
                {menu}
            </nav>
        </header>
    );
}

function LoginMenu() {
    return (
        <ul>
            <li key="1" className="button"><Link to="/">Log In</Link></li>
            <li key="2" className="button"><Link to="/register">Sign Up</Link></li>
            <li key="3" className="button"><Link to="/demo">Demo</Link></li>
        </ul>
    );
};

function Menu() {
    return(
        <ul>
            <li key="4" className="button"><Link to="/home">Home</Link></li>
            <li key="5" className="button"><Link to="/account">Account</Link></li>
            <li key="6" className="button"><Link to="/wishlist">WishList</Link></li>
        </ul>
    );
};

export default Header;