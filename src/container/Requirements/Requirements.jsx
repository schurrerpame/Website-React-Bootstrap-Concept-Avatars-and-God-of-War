import React from 'react';
import { Headings } from '../../components';
import {  data } from '../../constants'
import './Requirements.css';


const Requirements = () => {
  return (
    <div className="bg-gradient-black requirements" id="requirements">
      <div className="container section-padding">
        <div className="row">
          <div className="col-12">
            <Headings txt="system requirements" subtxt="Can My Computer Run this game?" />
          </div>
          <div className="col-md-6 col-12">

            <div class="requirements-grid">
              {data.demand.map((caracteristica, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <span>{caracteristica.titulo}</span>
                    {caracteristica.descripcion}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Requirements