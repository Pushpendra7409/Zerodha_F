import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center p-5 mb-5">
    <div className="row text-center">
      <h1 className="mt-5">404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
    <Link to="/" className='fs-3 text-decoration-none text-dark'>Back to Go Home</Link>
  </div>
  )
}

export default NotFound