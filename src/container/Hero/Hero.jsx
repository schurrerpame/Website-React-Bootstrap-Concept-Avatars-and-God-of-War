import React from 'react'
import { Menu } from '../../components';
import { BsCaretDown } from 'react-icons/bs'
import './Hero.css';

const Hero = () => {
  return (
    <header className="bg-banner" id="main">
      <Menu />
      <div className="hero">
        <h1 className="heading">SURVIVE AT ALL COSTS</h1>
        <h4 className="heading-subtitle">Experience new ASSASSIN’S CREED VALHALLA</h4>
        <a className="btn btn-custom" href="#" role="button">Purchase Now <span>|</span> $14.99</a>
        <a href="#about" className="scrolldown">
          <span>The story</span>
          <BsCaretDown />
        </a>
      </div>
    </header>
  )
}

export default Hero