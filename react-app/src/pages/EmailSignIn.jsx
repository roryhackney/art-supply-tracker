import { sendSignInLinkToEmail } from 'firebase/auth';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderLoggedOut from '../HeaderLoggedOut';
import Footer from '../Footer';

function EmailSignIn () {
    //if logged in, go home
    const navigate = useNavigate();
    useEffect(() => {auth.onAuthStateChanged((user) => {
        if (user) {
            navigate("/home");
        }
    })})

    //else, display form to verify email
    document.title = "Email Sign In | Art Supply Tracker";

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    //if email is changed, update to current value
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (email === "") {
            setError("Email is required");
        } else if (email.indexOf('@') < 0) {
            setError("@ symbol is required");
        }

        if (error == {}) {
            sendSignInEmail(email);
        }
    }

    const sendSignInEmail = () => {
        //if there is a user with that email, send email1
        //if there is not, send different email2
        //currently sends the same email whether exists or not
        console.log("sending email to:", email);
        const actionCodeSettings = {
            url: "https://art-supply-tracker.web.app/complete-sign-in",
            handleCodeInApp: true
        }
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            setError('');
            console.log("sign in link sent");
            window.localStorage.setItem("emailForSignIn", email);
        }).catch((error) => {
            // console.log("Unable to send: ", error.code);
            if (error.code == "auth/invalid-email") {
                setError("Please enter a valid email");
            } else if (error.code == "auth/quota-exceeded") {
                setError("Limit has been reached for email sign in today. Please try again tomorrow.")
            } else {
                console.log(error.code);
            }
        })
    }

    return (
        <>
        <HeaderLoggedOut/>
        <main>
            <h2>Email Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" value={email} onChange={handleChange}/>
                <span className='error'>{error || ""}</span>
                <br/>
                <button type="submit" className="button" onClick={() => {
                    console.log("submitted");
                    sendSignInEmail(email);
                }}>Send Email</button>
            </form>
        </main>
        <Footer/>
        </>
    );
}

//ok so I think it'll be easier just to use the sendsigninlinktoemail login option
//in addition to the password option
//so if they forgot their password or email, they can click that link
//and then it'll either send them an email to sign in easily
//or to make an account if the email is not registered
//I should change the UI to make the different function clear

export default EmailSignIn;