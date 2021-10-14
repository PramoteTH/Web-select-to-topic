import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { auth } from '../firebase/config'
import Footer from '../Footer';

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            auth.signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (

            <><br /><br />
            <br /><br /><br /><br />
            <div className="container mt-5" align="center">
            <h1>Log-in</h1><br />
            <form onSubmit={handleSubmit}>
            <div className="mb-3"> 
            E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div><br />
            <div className="mb-3"> 
            Password :&nbsp;<input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div><br />
            <button type="submit" className="btn btn-primary">Log-in</button>
            </form>
            </div><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}

export default LogIn;