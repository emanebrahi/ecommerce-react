import React from 'react';
import '../style/sliderhome.css'

function Titlehome(props) {
  return (
    <div>
       <h4 className="todays-title">{props.title}</h4>
       <h2 className='flash-sales-title'>{props.secondTitle}</h2>
    </div>
  )
}

export default Titlehome
