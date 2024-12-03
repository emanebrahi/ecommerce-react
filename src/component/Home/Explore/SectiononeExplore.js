import React, { useEffect, useState } from 'react'
import Titlehome from '../../Titlehome';
import ProductsShape from '../ProductsShape';
import axios from 'axios';
import Slider from 'react-slick';

function SectiononeExplore() {
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
    const [data,setData] = useState([]);
    useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
            .then((response)=>(
               
                setData(response.data.slice(4,12))
            ))
            .catch((error)=>console.log(error))
    },[])
  return (
    <div className='container mt-5'>
      <Titlehome title="our products" secondTitle="Explore Our Products"/>
      <div className='row'>
      <Slider {...settings}>
      {data.map((element,index)=>{
        return(
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
              <ProductsShape element={element} index={index}/>
            </div>
        )
      })}
      </Slider>
      </div>
    </div>
  )
}

export default SectiononeExplore
