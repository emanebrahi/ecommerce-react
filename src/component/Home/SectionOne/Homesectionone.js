import React from 'react'
import Sliderhome from './Sliderhome'
import Sidebarhome from './Sidebarhome'

function Homesectionone() {
  return (
    <div className='container mt-5'>
      <div className='row'>
      <Sidebarhome/>
      <Sliderhome/>
      </div>
    </div>
  )
}

export default Homesectionone
