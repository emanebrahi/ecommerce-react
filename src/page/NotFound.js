import React from 'react';
import '../style/notfound.css'
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found-div text-center'>
     <h2> 404 Not Found</h2>
     <p className='mt-4 fs-6'>Your visited page not found. You may go home page.</p>
     <NavLink to="/" className='btn btn-danger mt-4 ps-5 pe-5'>Back to home page</NavLink>
    </div>
  )
}

export default NotFound
