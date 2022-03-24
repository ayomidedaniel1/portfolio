import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/Logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__montserrat"><a href="#about">About me</a></li>
        <li className="p__montserrat"><a href="#skills">Skills</a></li>
        <li className="p__montserrat"><a href="#works">My Works</a></li>
        <div className="app__navbar-contact">
          <button><a href="#contact" className='p__montserrat'>CONTACT ME</a></button>
        </div>
      </ul>
      <div className="app__navbar-smallscreen">
        <RiMenu3Line color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiCloseLine fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <div />
              {/* <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li> */}
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About me</a></li>
              <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="#works" onClick={() => setToggleMenu(false)}>My Works</a></li>
              <div className="app__navbar-contact">
                <button><a href="#contact" onClick={() => setToggleMenu(false)}>CONTACT ME</a></button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
