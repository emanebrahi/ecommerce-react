import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Sliderhome() {
  const [data,setData] = useState([]);
  useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products`).
      then(response =>{setData(response.data.slice(9,14))}).
      catch(error=>{console.log(error)})
  },[])

  return (
    <div className='mb-5 g-3 col-lg-9 col-md-12 col-sm-12 col-12'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  {data.map((item,index)=>(
      <button type="button"
      key={item.id}
      id={item.id}
       data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index} 
        className={index == 0 ? "active" :""} 
        aria-current={index == 0 ? "true" :false} 
        aria-label={`Slide + ${index+1}`}>
         </button>

    ))}
  </div>
  <div className="carousel-inner">
   
{data.map((item,index) => (
         <div key={item.id} className={`carousel-item position-relative ${index == 0 ? "active" :""} `}>
        <img src={item.image} className="d-block image-slider"  alt="..."/>
        <div className='image-slider-description'>
           <div className='overlay'>
           <p>{item.title}</p> 
           <p>{item.description.slice(0,150)}</p>   
           <button className='btn btn-light'>shop now</button> 
            </div>      
        </div>
       </div>
        ))}
  </div>
</div>
  </div>
  )
}

export default Sliderhome
