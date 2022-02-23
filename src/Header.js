import React from 'react'
import "./style.scss"
import logo from "./img/logo-clean3000-transparent.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="mainHeader">
      <Link to='/'>
        <div className="imageHeader">
            
        <img src={logo} alt="" />
        </div>
        </Link>
    </div>
  )
}

export default Header