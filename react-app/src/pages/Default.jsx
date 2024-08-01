import {useEffect} from 'react';
import {auth} from '../firebase';
import HeaderLoggedOut from '../HeaderLoggedOut';
import HeaderLoggedIn from '../HeaderLoggedIn';
import Footer from '../Footer';
import { setMenu } from '../helpers';

function Default() {
    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (user) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    })});

    return (
        <>
        <HeaderLoggedOut/>
        <main>
            <h2>Page not found</h2>
            <a href="/home" className="button">Home</a>
        </main>
        <Footer/>
        </>
    );
}

export default Default;