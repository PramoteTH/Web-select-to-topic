import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { auth } from '../firebase/config'
import Footer from '../Footer';

const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <>
        <div>
            <div className="container mt-5" align="center"><br /><br />
                <h1>Welcome</h1><br />
                <p>This is the dashboard, if you can see this you're logged in.</p>
                <p>And please log out after every use. to protect your rights</p><br />
                <button onClick={() => auth.signOut()} class="btn btn-danger" >Sign Out</button>
            </div>
        </div><br /><br /><br /><br /><br />
        <Footer />
        </>
    )
}

export default DashBoard;