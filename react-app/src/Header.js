import {BrowserRouter, Route, Link} from "react-router-dom";

function Header(props) {
    let menu = LoginMenu();
    if(props.isLoggedIn) {
       menu = Menu();
    };
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
            <li key="4" className="button">Account</li>
            <li key="5" className="button">My WishList</li>
        </ul>
    );
};

export default Header;