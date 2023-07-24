import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        {/* <div>
          <span>&lt;body&gt;</span>
          <Outlet/>
          <span>
            &lt;body&gt;
            <br/>
            <span> &lt;html&gt;</span>
            </span>
        </div> */}
    </div>
  )
}

export default Layout