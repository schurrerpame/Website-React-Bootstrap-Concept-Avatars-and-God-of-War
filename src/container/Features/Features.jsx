import React from 'react'
import { Headings, Accordions } from '../../components';
import './Features.css';
const Features = () => {
  return (
    <div className="bg-black" id="features">
    <div className="container section-padding">
      <div className="row">
           <div className="col-md-6 col-12 order-2 order-md-1">
            <div className="feature-img">

          </div>
        </div>
        <div className="col-md-6 col-12  order-1 order-md-2">
          <Headings txt="features" subtxt="Why so special?" />

            <Accordions />

        </div>

      </div>

    </div>

  </div>
  )
}

export default Features