import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'

const HomeLogin = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div className="container mt-5">
            <br /> <br /> <br />
                <h1>Welcome</h1>
                {currentUser ? (
                    <p align="center">You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
                ) : (
                    
                    <div className="container mt-5" align="center">
                        <h5 class="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE TRAVEL</span></h5>
                        <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile,</p>
                        <p>train, boat, bus, airplane, ship or other means, with or without luggage,</p>
                        <p>and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of</p>
                        <div className="w3-panel w3-leftbar w3-light-grey"><br />
                        <p><i>"To awaken quite alone in a strange town is one of the pleasantest sensations in the world.." </i></p>
                        <p>Web Developer : Pramote Kaewdonmong</p><br />
                        </div><br />
                    <p>
                        <Link to="/login" className="btn  btn-primary">Log In</Link> or <Link to="/signup" className="btn btn-success">Sign Up</Link>
                    </p>
                    </div> 
                )}
            </div>
        </>
    )
}

export default HomeLogin;