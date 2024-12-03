import React from 'react';
import radioimage from '../../../imges/radio.png'
import TimerComponent from '../TimerComponent/Timercomponent';
import { Timercomponentdatatwo } from '../../../data/TimerComponent/Timercomponentdatatwo';

function Bestsellingsectiontwo() {
  const bestsellingimgcontainer ={
    backgroundImage: "radial-gradient(#565454, #212529, #212529)"
  }
  return (
    <div className='container'>
        <div className='bg-dark'>
        <div className='row'>
            <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
             <div className='p-5 mt-5'>
             <h6 style={{color:"#00FF66"}}>categories</h6>
              <h2 className='text-light mt-4 mb-4'>Enhance your music experience</h2>
              <TimerComponent seperatorClass="seperator-selling" initialTimer={6*24*60*60} dataGenerator={Timercomponentdatatwo} />
              <button className='btn ps-5 pe-5 mb-5 mt-4' style={{backgroundColor:"#00FF66"}}>Buy now</button>

             </div>
            </div>
            <div className='col-lg-7 col-md-6 col-sm-12 col-12'>
              <div style={bestsellingimgcontainer} className='h-100 text-center'>
              <img src={radioimage} className='w-75 overflow-hidden h-100'/>

              </div>
            </div>

        </div>
      
        </div>
    </div>
  )
}

export default Bestsellingsectiontwo
