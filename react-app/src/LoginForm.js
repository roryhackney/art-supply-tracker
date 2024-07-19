import React, {useState} from 'react';

function LoginForm() {
    //React state - an object containing a username and password, initially blank
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    //If a field is changed, update the state using the spread operator ...
    const handleChange = (event) => {
        const fieldname = event.target.name;
        const value = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [fieldname]: value
        }));
    };

    //when the form is submitted, process it
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted: ${JSON.stringify(formData)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username or Email</label>
            <input id="username" name="username" type="text" value={formData.username} onChange={handleChange}/>
            <a href="">Forgot Username</a>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange}/>
            <a href="">Forgot Password</a>
            <button className="button" type="submit">Log In</button>
        </form>
    );
}

export {LoginForm};