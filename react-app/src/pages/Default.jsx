import React from 'react';
import {auth} from '../firebase';
import HeaderLoggedOut from '../HeaderLoggedOut';
import HeaderLoggedIn from '../HeaderLoggedIn';
import Footer from '../Footer';

function Default() {
    const header = <HeaderLoggedOut/>;
    if (auth.currentUser) {
        header = <HeaderLoggedIn/>;
    }

    return (
        <>
        {header}
        <main>
            <h1>Page not found</h1>
            <a href="/home" className="button">Home</a>
        </main>
        <Footer/>
        </>
    );
}

export default Default;