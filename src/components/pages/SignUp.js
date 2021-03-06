import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebase/config'
import Footer from '../Footer';

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            auth.createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <><br /><br />
        <br /><br /><br /><br />
            <div className="container mt-5" align="center">
            <h1>Sign Up</h1><br />
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div><br />
            <div className="mb-3"> 
            Password :&nbsp;<input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div><br />
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}

export default SignUp;
