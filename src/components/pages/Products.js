import React from 'react';
import '../../App.css';
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { useContext } from 'react'

function Products() {
  const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }
  return <h1 className='products'>PRODUCTS</h1>;
}

export default Products;