import React from 'react'
import CheckoutSectionOne from './CheckoutSectionOne'
import CheckoutSectionTwo from './CheckoutSectionTwo'

function Checkout() {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='mb-5'>Billing details</h2>
        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
        <CheckoutSectionOne/>

        </div>

        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
        <CheckoutSectionTwo/>

        </div>
      </div>
        
    </div>
  )
}

export default Checkout
