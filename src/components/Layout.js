import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <ul>
            <li>
                <Link to="/blogs">Blogs Component</Link>
                {/* <a href="www.facebook.com"></a> */}
            </li>
            <li>
                <Link to="/about">About Us Component</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us Component</Link>
            </li>
            <li>
              <Link to="/" >Home Component</Link>
            </li>
            <li>
              <Link to="/dishes" >Dishes Component</Link>
            </li>
        </ul> 

        <Outlet/>
    </>
  )
}

export default Layout