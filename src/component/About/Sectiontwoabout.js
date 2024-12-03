import React from "react";
import "../../style/about.css";

function Sectiontwoabout({ data }) {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        {data.map((element, index) => (
          <div
            key={index}
            className={`${
              data.length > 3
                ? "col-lg-3 col-md-6 col-sm-12 col-12"
                : "col-lg-4 col-md-4 col-sm-12 col-12"
            } position-relative`}
          >
            <div className= {`${
              data.length > 3
                ? "border border-1 container-item"
                : "border-none p-3"
            } position-relative`}>
              <div className="container-circular-div">
                <div className="div-with-gray-bg">
                  <div className="div-with-black-bg">
                    <div>{element.icon}</div>
                  </div>
                </div>
              </div>
              <p className={`${ data.length > 3 ? "h4": "h6" } mt-3`}
              
              >{element.title}</p>
              <p>{element.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sectiontwoabout;
