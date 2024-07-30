import {Link} from "react-router-dom";

function HeaderLoggedOut() {
    return (
        <header>
            <img src="./astlogo.png" alt="Logo for Art Supply Tracker" width="425" height="378"/>
            <h1>Art Supply Tracker</h1>
            <nav id="nav">
                <ul>
                    <li key="1" className="button"><Link to="/">Log In</Link></li>
                    <li key="2" className="button"><Link to="/register">Sign Up</Link></li>
                    <li key="3" className="button"><Link to="/demo">Demo</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderLoggedOut;