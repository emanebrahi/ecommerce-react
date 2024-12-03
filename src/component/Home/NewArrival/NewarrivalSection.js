import React from 'react';
import Titlehome from '../../Titlehome'
import NewArrivalComponent from './NewArrivalComponent';
function NewarrivalSection() {
  return (
    <div className='container mt-5'>
       <div className='featured-title'>
       <Titlehome title ="Featured" secondTitle ="New Arrival"/>
       </div>
        <NewArrivalComponent/>
      
    </div>
  )
}

export default NewarrivalSection
