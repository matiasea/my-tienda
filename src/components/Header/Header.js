import React from 'react'
import "./Header.css"
import img from "../Header/OneWeb_Logo.png"

const Header = () => {
  return (
    <div className='header'>
			<img src={img} className="logo"/>
    </div>
  )
}

export default Header