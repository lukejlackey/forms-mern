import React, { useState } from 'react';

const PersonFormValid = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState(""); 
    const [firstNameE, setFirstNameE] = useState("");
    const [lastNameE, setLastNameE] = useState("");
    const [emailE, setEmailE] = useState("");
    const [passwordE, setPasswordE] = useState(""); 
    const [confirmE, setConfirmE] = useState(""); 

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameE("First Name is required.");
        }
        else if (e.target.value.length < 3) {
            setFirstNameE("First Name must be at least " + 3 + " characters long.");
        }
        else {
            setFirstNameE("");
        }
    }
    const validateLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameE("Last Name is required.");
        }
        else if (e.target.value.length < 3) {
            setLastNameE("Last Name must be at least " + 3 + " characters long.");
        }
        else {
            setLastNameE("");
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailE("Email is required.");
        }
        else if (e.target.value.length < 3) {
            setEmailE("Email must be at least " + 3 + " characters long.");
        }
        else {
            setEmailE("");
        }
    }
    const validatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordE("Password is required.");
        }
        else if (e.target.value.length < 8) {
            setPasswordE("Password must be at least " + 8 + " characters long.");
        }
        else {
            setPasswordE("");
        }
    }
    const validateConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password) {
            setConfirmE("Passwords must match.");
        }
        else {
            setConfirmE("");
        }
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ validateFirstName } />
                    {
                        firstNameE?
                        <p>{firstNameE}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ validateLastName } />
                    {
                        lastNameE?
                        <p>{lastNameE}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="email" onChange={ validateEmail } />
                    {
                        emailE?
                        <p>{emailE}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ validatePassword } />
                    {
                        passwordE?
                        <p>{passwordE}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validateConfirm } />
                    {
                        confirmE?
                        <p>{confirmE}</p> :
                        ''
                    }
                </div>
            </form>
        </div>
    )
}

export default PersonFormValid;