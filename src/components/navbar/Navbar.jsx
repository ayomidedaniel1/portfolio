import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <Link to='/'><img src={Logo} alt="logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__montserrat"><Link to='/about'>About me</Link></li>
        <li className="p__montserrat"><Link to='/skills'>Skills</Link></li>
        <li className="p__montserrat"><Link to='/portfolio'>My Works</Link></li>
        <div className="app__navbar-contact">
          <button><Link className="p__montserrat" to='/contact'>CONTACT ME</Link></button>
        </div>
      </ul>
      <div className="app__navbar-smallscreen">
        <RiMenu3Line color="var(--text-cool)" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-left">
            <RiCloseLine color="var(--text-cool)" fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <div />
              <li><Link to="/about" onClick={() => setToggleMenu(false)}>About me</Link></li>
              <li><Link to="/skills" onClick={() => setToggleMenu(false)}>Skills</Link></li>
              <li><Link to="/portfolio" onClick={() => setToggleMenu(false)}>My Works</Link></li>
              <div className="app__navbar-contact">
                <button><Link to="/contact" onClick={() => setToggleMenu(false)}>CONTACT ME</Link></button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
