import React, { useEffect, useState } from "react";
import "../../../style/sliderhome.css";
import "../../../style/explore.css";
import axios from "axios";

function SectiontwoExplore() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setData(response.data.slice(9, 13));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const styleImage = {
    width: "85%",
    height: "200px",
    overflow: "hidden",
    padding: "0.5rem",
    borderRadius: "50px",
  };

  const styleImageContainer = {
    backgroundColor: "#f5f5f5",
    margin: "5px",
    position: "relative",
  };

  return (
    <div className="item-product">
      <div className="container mt-3">
        <div className="row">
          {data.map((element, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6 position-relative">
                <div style={styleImageContainer} >
                  <img
                    style={styleImage}
                    src={element.image}
                    alt={element.title}
                  />
                  {(index == 0 || index ==2) && (
                    <div className="new-container">
                    <span className="d-block ps-2 pe-2">New</span>
                  </div>
                  )}
                </div>
                <div className="icons ">
                  <div className="icons-container">
                  <i className="fa-regular fa-heart mb-1"></i>
                  <i className="fa-regular fa-eye"></i>
                  </div>
                 
                </div>
                <div>
                  <p className="ps-3">{element.title}</p>
                  <p className="ps-3 mb-0">
                    <span className="text-secondary text-decoration-line-through">
                      {element.price}$
                    </span>
                  </p>
                  <div className="rate mt-0">
                    <svg width="100" height="50" viewBox="0 0 200 20">
                      <defs>
                        <linearGradient id={`grad-${index}`}>
                          <stop offset="50%" stopColor="gold" />
                          <stop offset="100%" stopColor="gray" />
                        </linearGradient>
                      </defs>
                      <text
                        x="10"
                        y="15"
                        fontSize="40"
                        fill={`url(#grad-${index})`}
                      >
                        ★★★★★
                      </text>
                    </svg>
                    <p>({element.rating.rate})</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectiontwoExplore;
