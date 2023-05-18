import React from 'react'
import { Headings } from '../../components';
import './News.css';
import { imanews } from '../../assets';
const News = () => {
  return (
    <div className="bg-black subscribe" id="subscribe">
      <div className="container section-padding">
        <div className="row">
          <div className="col-md-5 col-12 order-2 order-md-1">
            <div className="containerimage">
              <img src={imanews} alt="txt " className="image" />
            </div>
          </div>

          <div className="col-md-7 col-12 order-1 order-md-2">
            <Headings txt="newsletter SUBSCRIBE " subtxt="Want to stay in touch?" />
            <p className="text-white">In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.</p>
            <div className="d-flex justify-content-center mt-5 mb-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email address"
                />
                <button className="btn btn-primary" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  Subscribe now
                </button>
              </div>
            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

export default News