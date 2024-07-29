import React, {useContext, useState} from 'react';
import toggleVisible from './helpers';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase.js';
import {useNavigate} from 'react-router-dom';
import { UserContext } from './App.js';

function LoginForm() {
    const navigate = useNavigate();
    // let context = useContext(UserContext);
    const {state, update} = useContext(UserContext);

    //React state - an object containing an email and password, initially blank
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    //If a field is changed, update the state using the spread operator ...
    const handleChange = (event) => {
        const fieldname = event.target.name;
        const value = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [fieldname]: value
        }));
    };

    //make sure the user entered something valid
    const validate = () => {
        let errors = {};
        
        //if blank
        if (formData.email === "") {
            errors.email = "Email is required";
        } else if (formData.email.indexOf('@') < 0) {
            errors.email = "@ symbol is required";
        }
        if (formData.password === "") {
            errors.password = "Password is required";
        } else if (formData.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }
        return errors;
    }

    //when the form is submitted with no errors, process it
    const handleSubmit = (event) => {
        event.preventDefault();
        let err = validate();
        if (Object.keys(err).length === 0) {
            console.log(`Form submitted: ${JSON.stringify(formData)}`);
            //try to log the user in, pw and email are valid strings
            signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                //set the new user in the context state and redirect to home
                update({user: userCredential.user});
                navigate("/home");
            }).catch((error) => {
                //bad email or password, make them log in again
                //security practice doesn't let you tell user which is invalid, I guess
                if (error.code === "auth/invalid-credential") {
                    err.creds = "Invalid email or password";
                } else {
                    console.log("Something went wrong:", error.message);
                }
                setErrors(err);
            });
        } else {
            setErrors(err);
        }
    };

    //the actual form
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="text" value={formData.email} onChange={handleChange}/>
            <span className="error">{errors.email || ""}</span>
            <label htmlFor="password">Password</label>

            <div id="outer">
                <div id="inner_input">
                    <input id="password" name="password" type="password" value={formData.password} onChange={handleChange}/>
                </div>
                <div id="inner_eye">
                    <i className="far fa-eye" id="toggleVisible" onClick={toggleVisible}></i>
                </div>
            </div>
            <span className="error">{errors.password || ""}</span>
            <span className="error">{errors.creds || ""}</span>
            <a href="reset-password">Forgot Password</a>
            <button className="button" type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;