import React from 'react';
import './Footer.css';
import { data } from '../../constants';
import logo from '../../assets/logo.png';
import { FaYoutube, FaFacebookF, FaTwitch, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="footer container">

        <div className="row">
          <div className="col-lg-2 col-12 logofooter">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-lg-8 col-12">
            <ul>
              {data.menu.map((item) => (
                <li>
                  <a className="nav-link" href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-12 icons">
            <FaYoutube /> <FaFacebookF /> <FaTwitch /> <FaInstagram />
          </div>

        </div>
      </div>
      <div className="container">
        <div className="rights">
          <p> All Rights Reserved @faizansayani  </p>
          <p classsName="text-right">Privacy Policy | Terms of Services | Code of Conduct </p>
            </div>

      </div>

    </footer>
  )
}

export default Footer