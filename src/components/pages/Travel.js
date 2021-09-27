import React from 'react';
import '../../App.css';
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { useContext } from 'react'

function Travel() {
  const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }
  return <h1 className='Travel'>Travel</h1>;
}

export default Travel;