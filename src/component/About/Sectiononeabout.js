import React from "react";
import aboutphoto from "../../imges/aboutphoto.jpeg";

function Sectiononeabout() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-b col-sm-12 col-12 ">
          <h1>Our Story</h1>
          <p className="about-text">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. Exclusive offers a diverse assotment
            in categories ranging from consumer.
          </p>

          <p className="about-text">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. Exclusive offers a diverse assotment
            in categories ranging from consumer.
          </p>
        </div>
        <div className="col-lg-6 col-md-b col-sm-12 col-12">
          <img className="w-100 overflow-hidden" src={aboutphoto} />
        </div>
      </div>
    </div>
  );
}

export default Sectiononeabout;
