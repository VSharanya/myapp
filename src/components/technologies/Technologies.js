import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Technologies() {
  return (
    <div>
         <ul className="nav justify-content-center mt-5">
        {/*Link to Java*/}
  <li className="nav-item">
    <Link className="nav-link" to='java'>Java</Link>
  </li>
   {/*Link to NodeJS*/}
  <li className="nav-item">
    <Link className="nav-link" to="nodejs">NodeJS</Link>
  </li>
   {/*Link to Vue*/}
  <li className="nav-item">
    <Link className="nav-link" to="vue">Vue</Link>
  </li>
</ul>
{/* Component placeholder */}
<Outlet/>

    </div>
  )
}

export default Technologies