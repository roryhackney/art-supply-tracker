import React, {useState} from 'react';
import bcrypt from 'bcryptjs';

function LoginForm() {
    //React state - an object containing a username and password, initially blank
    const [formData, setFormData] = useState({
        username: '',
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
    //TODO: and the username exists
    //TODO: and the password is a match
    const validate = () => {
        let errors = {};
        
        //if blank
        if (formData.username === "") {
            errors.username = "Username/email is required";
        }
        if (formData.password === "") {
            errors.password = "Password is required";
        }
        
        //TODO: check db for valid username and password
        //if not blank, check username and password are valid
        // if (formData.password !== "" && formData.username !== "") {
        //     //check that the username exists
        //     const count1 = "COUNT users WHERE username == username";
        //     const count2 = "COUNT users WHERE email == username";
        //     if (count1 === 0 && count2 === 0) {
        //         errors.username = "Username/email not registered";
        //     } else {
        //         //check the password
        //         let pw;
        //         if (count1 === 1) {
        //             pw = "COUNT users WHERE username == username AND password == password";
        //         } else {
        //             pw = "COUNT users WHERE email == username AND password == password";
        //         }
        //         if (pw === 0) {
        //             errors.password = "Incorrect password";
        //         }
        //     }   
        // }
        return errors;
    }

    //when the form is submitted with no errors, process it
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(`Form submitted: ${JSON.stringify(formData)}`);
            //TODO: log the user in, pw and username are valid
        }
        setErrors(errors);
    };

    //the actual form
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username or Email</label>
            <input id="username" name="username" type="text" value={formData.username} onChange={handleChange}/>
            <span className="error">{errors.username || ""}</span>
            <a href="">Forgot Username</a>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange}/>
            <span className="error">{errors.password || ""}</span>
            <a href="">Forgot Password</a>
            <button className="button" type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;