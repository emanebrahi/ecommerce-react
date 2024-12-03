import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../../style/newarrival.css'; 
import { Link } from 'react-router-dom'; 

function NewArrivalComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const groupedData = {};
        response.data.forEach((item) => {
          if (!groupedData[item.category]) {
            groupedData[item.category] = item;
          }
        });
        setData(Object.values(groupedData));
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* First column */}
        {data[0] && (
          <div className="col-lg-4 col-md-4 col-sm-12 col-12  d-flex">
            <div className="card product-card-one flex-fill position-relative">
              <img
                src={data[0].image}
                alt={data[0].title}
                className="card-img-top product-image"
              />
              <div className="overlay-content ">
                <h6 className="card-title">{data[0].category}</h6>
                <p className="card-text">{data[0].description.slice(0,40)}</p>
                <Link to={`/category/${data[0].category}`} className="btn btn-light w-50">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Second column */}
        <div className="col-lg-8 col-md-8 col-sm-12 col-12  d-flex flex-column">
          {data[1] && (
            <div className="card product-card mb-3 flex-fill position-relative">
              <img
                src={data[1].image}
                alt={data[1].title}
                className="card-img-top product-image"
              />
              <div className="overlay-content ">
                <h6 className="card-title">{data[1].category}</h6>
                <p className="card-text">{data[1].description.slice(0, 20)}</p>
                <Link to={`/category/${data[1].category}`} className="btn btn-light shopnow-jewell">
                  Shop Now
                </Link>
              </div>
            </div>
          )}

          <div className="row g-3 flex-grow-1">
            {data.slice(2, 4).map((item) => (
              <div key={item.id} className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex">
                <div className="card product-card flex-fill position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top product-image"
                  />
                  <div className="overlay-content">
                    <h6 className="card-title">{item.category}</h6>
                    <p className="card-text">{item.description.slice(0, 20)}</p>
                    <Link to={`/category/${item.category}`} className="btn btn-light w-50">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NewArrivalComponent;
