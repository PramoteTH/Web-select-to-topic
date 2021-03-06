import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PMP
            <i class='fas fa-feather-alt' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Show'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Images
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Upload'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Upload
              </Link>
            </li>
            <li>
              <Link 
                to='/Home'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log-in
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Log-in</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
