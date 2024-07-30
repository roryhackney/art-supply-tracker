import {auth} from '../firebase';
import HeaderLoggedOut from '../HeaderLoggedOut';
import HeaderLoggedIn from '../HeaderLoggedIn';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function Demo() {
    document.title = "Demonstration | Art Supply Tracker";
    let [header, setHeader] = useState(<HeaderLoggedOut/>);
    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (user) {
            setHeader(<HeaderLoggedIn/>);
        } else {
            setHeader(<HeaderLoggedOut/>);
        }
    })});
    
    return (
        <>
        {header}
        <main>
            <h1>Demonstration</h1>
            <p className='headingText'>of the Art Supply Tracker</p>
        </main>
        <Footer/>
        </>
    );
}

export default Demo;