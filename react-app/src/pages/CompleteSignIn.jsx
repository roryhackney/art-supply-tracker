import { isSignInWithEmailLink, signInWithEmailLink, getAdditionalUserInfo } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function CompleteSignIn () {
    const nav = useNavigate();
    let message = "";
    // console.log("href", window.location.href);
    // console.log(isSignInWithEmailLink(auth, window.location.href));
    //if the source of the request is the email link
    if (isSignInWithEmailLink(auth, window.location.href)) {
        //if same device, grab the email
        let email = window.localStorage.getItem('emailForSignIn');
        // console.log("stored email", email);
        //if different device, ask for the email
        if (! email) {
            email = window.prompt("Please enter your email for confirmation");
        }
        //try to sign in, email must be the same as the request
        signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
                //remove the stored email for security
                window.localStorage.removeItem('emailForSignIn');
                nav('/account');
                //do stuff as needed
                //user.profile
                //user.isNewUser
        }).catch((error) => {
            console.log("Couldn't sign in:" + error.code);
            if (error.code == "auth/invalid-action-code") {
                message = "You can only use the sign in link once. Please request another email.";
            } else if (error.code == "auth/quota-exceeded") {
                message = "Too many requests. Please try again tomorrow.";
            } else {
                console.log(error.code);
            }
        })
    } else {
        message = "Couldn't sign in, you must navigate to this page from the email link";
    }

    return (
    <main>
        <h2>Something Went Wrong</h2>
        <p className='headingText'>{message}</p>
        <br/>
        <a className="button" href="/forgot-email">Request Email</a>
    </main>);
}

//after all that, turns out email sign in links are limited to 5/day
//which obviously will not work
//well
//alrighty

export default CompleteSignIn;