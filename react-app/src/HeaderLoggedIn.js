import {Link} from "react-router-dom";

function HeaderLoggedIn() {
    return (
        <header>
            <img src="./astlogo.png" alt="Logo for Art Supply Tracker" width="425" height="378"/>
            <h1>Art Supply Tracker</h1>
            <nav>
                <ul>
                    <li key="4" className="button"><Link to="/home">Home</Link></li>
                    <li key="5" className="button"><Link to="/account">Account</Link></li>
                    <li key="6" className="button"><Link to="/wishlist">WishList</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderLoggedIn;