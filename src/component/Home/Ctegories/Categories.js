import React, { useEffect, useState } from "react";
import icons from '../../../data/Categories/categoriesdata'
import Titlehome from "../../Titlehome";
import Slider from "react-slick";
import '../../../style/categories.css'

function Categories() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className="container pt-0 mt-4 mb-5" style={{backgroundColor:"white"}}>
      <Titlehome title="categories" secondTitle ="Browse By Category" />

      <Slider {...settings}>
        {icons.map((icon, index) => {
          return (
            <div className="item-category h-50" key={index}>
              <div className="category">
                <div className="position-relative">
                  <p> {icon.categoryIcon} </p>
                  <p className="ps-3">{icon.title}</p>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-dark w-100 add-to-cart">
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
      <hr className="mt-5"/>
    </div>
  );
}

export default Categories;
