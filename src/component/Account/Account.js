import React from 'react'
import SectionOneAccount from './SectionOneAccount'
import SectionTwoAccount from './SectionTwoAccount'

function Account() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <SectionOneAccount/>
            </div>

            <div className='col-lg-8 col-md-6 col-sm-12 col-12'>
            <SectionTwoAccount/>
            </div>
        </div>
     
    </div>
  )
}

export default Account
