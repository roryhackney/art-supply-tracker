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
            <li key="1" className="button">Log In</li>
            <li key="2" className="button">Sign Up</li>
            <li key="3" className="button">Demo</li>
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

export {Header};