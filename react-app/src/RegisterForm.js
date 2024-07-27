import React, {useState} from 'react';
import toggleVisible from './helpers';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase.js';
import {useNavigate} from 'react-router-dom';

function RegisterForm() {
    //allows auto loading of another page
    const n = useNavigate();
    
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

    //make sure the user entered something
    //and the password is 8+ chars long
    //and the email includes an @ sign
    const validate = () => {
        let errors = {};        
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(`Form submitted: ${JSON.stringify(formData)}`);
            //TODO: create user, pw and email are valid
            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                //redirect to login
                n("/");
            }).catch((error) => {
                console.log("Unable to create new account\n", error.code, error.message);
                if (error.code === "auth/email-already-in-use") {
                    errors.exists = <div>Email already exists<a href="/">Log In</a></div>;
                } else {
                    errors.exists = 'Unable to create account: ' + error.code;
                }
            })
        }
        setErrors(errors);
    };

    //the actual form
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="text" value={formData.email} onChange={handleChange}/>
            <span className="error">{errors.email || ""}</span>
            <span className="error">{errors.exists || ""}</span>
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
            <a href="reset-password">Forgot Password</a>
            <button className="button" type="submit">Sign Up</button>
        </form>
    );
}

export default RegisterForm;