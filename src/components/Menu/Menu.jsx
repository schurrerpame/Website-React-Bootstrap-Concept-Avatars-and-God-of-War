import React, { useState } from 'react';
import { BsXbox, BsSteam } from 'react-icons/bs';
import { logo } from '../../assets';
import {  data } from '../../constants';
import './Menu.css';

const Menu = () => {

 const [isNavCollapsed, setIsNavCollapsed] = useState(true);
 const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#main">
          <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : '`'} navbar-collapse justify-content-center`} id="navbarNav" >
          <ul className="navbar-nav">
          {data.menu.map((item)=>(
               <li className="nav-item">
              <a className="nav-link" onClick={handleNavCollapse} href={item.link}>{item.text}</a>
            </li>
          ))}
         </ul>
        </div>
        <div className="d-none d-lg-flex text-white">
        <ul className="navbar-nav navbar-icons"><li className="nav-item">
            <a className="nav-link" href="#"><BsXbox /></a>
          </li><li className="nav-item">
              <a className="nav-link" href="#"><BsSteam /></a>
            </li></ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu