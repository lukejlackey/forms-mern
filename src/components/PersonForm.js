import React, { useState } from 'react';

const PersonForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState(""); 

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirm(e.target.value) } />
                </div>
            </form>
            <div>
                <h2>Your Form Data</h2>
                <div>
                    <h3>First Name:</h3>
                    <p>{firstName}</p>
                </div>
                <div>
                    <h3>Last Name:</h3>
                    <p>{lastName}</p>
                </div>
                <div>
                    <h3>Email:</h3>
                    <p>{email}</p>
                </div>
                <div>
                    <h3>Password:</h3>
                    <p>{password}</p>
                </div>
                <div>
                    <h3>Confirm Password:</h3>
                    <p>{confirm}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonForm;