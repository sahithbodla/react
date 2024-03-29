import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <>
        <h1>This is Header Component</h1>
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
      </>

  )
}

export default Header