import {auth} from '../firebase';
import HeaderLoggedOut from '../HeaderLoggedOut';
import HeaderLoggedIn from '../HeaderLoggedIn';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {setMenu} from '../helpers';

function Demo() {
    const base = (<>
        <main>
            <h1>Demonstration</h1>
            <p className='headingText'>of the Art Supply Tracker</p>
        </main>
        <Footer/>
    </>);

    document.title = "Demonstration | Art Supply Tracker";
    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (user) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    })});

    return (<>
        <HeaderLoggedOut/>
        {base}
    </>)


    
}

export default Demo;