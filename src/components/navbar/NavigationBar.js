import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <ul className="nav justify-content-end">
        {/*Link to Home*/}
  <li className="nav-item">
    <Link className="nav-link" to=''>Home</Link>
  </li>
   {/*Link to Register*/}
  <li className="nav-item">
    <Link className="nav-link" to="register">Register</Link>
  </li>
   {/*Link to Login*/}
  <li className="nav-item">
    <Link className="nav-link" to="login">Login</Link>
  </li>
   {/*Link to Technologies*/}
  <li className="nav-item">
    <Link className="nav-link" to="technologies">Technologies</Link>
  </li>
</ul>
  )
}

export default NavigationBar