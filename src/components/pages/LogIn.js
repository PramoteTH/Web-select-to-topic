import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

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
                <label for="exampleInputEmail1" className="form-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email : </label>&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div><br />
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password : </label>&nbsp;&nbsp;&nbsp;
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div><br />
            <button type="submit" className="btn btn-primary">Log-in</button>
            </form>
            </div>
        </>
    )
}

export default LogIn;