import React from "react";

function Sectionthree({data}) {
 
  return (
    <div className="container mt-5">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {data.map((item, index) => (
            <button
              type="button"
              key={item.img}
              id={item.id}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index == 0 ? "active" : ""}
              aria-current={index == 0 ? "true" : false}
              aria-label={`Slide + ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index == 0 ? "active" : ""} `}
            >
              <div className="row">
                {item.images.map((image, i) => {
                  return (
                    <div key={i} className="col-lg-4">
                      <div className="w-75 h-75 image-slide-container">
                        <div className="w-100 h-100 text-center">
                          <img
                            className="w-75 h-100 p-2 overflow-hidden"
                            src={image}
                          />
                        </div>
                        <p>{item.title[i]}</p>
                        <p>{item.description[i]}</p>
                        {item.link.map((icon) => {
                          return <span>{icon}</span>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sectionthree;
