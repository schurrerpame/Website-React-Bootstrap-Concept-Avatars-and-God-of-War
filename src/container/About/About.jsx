import React from 'react';
import { Headings, Carousel } from '../../components';
import './About.css';



const About = () => {
  return (
    <div id="about" className="bg-gradient-black about">
      <div className="container section-padding">
        <div className="row">
          <div className="col-md-6 col-12">
            <Headings txt="Avatar's Fury" subtxt="War of the Titans" />
            <div className="pt-3"> 
            <p className="text-white mt-2">Valhalla's Fury is an enchanting blend of Avatar's world and the intense battles of God of War. Unleash your warrior's wrath to save a dying world, unravel secrets, and shape destiny. Traverse landscapes, face formidable foes, employ stealth and cunning, and forge alliances. </p>
            <p className="text-white mt-2">Experience the breathtaking fusion of two beloved franchises in an epic quest for balance. Prepare for an unparalleled odyssey that captivates and leaves you breathless.</p>
          </div>
          </div>
          <div className="col-md-1 col-12"></div>
          <div className="col-md-5 col-12">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About