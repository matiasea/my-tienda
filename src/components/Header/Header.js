import React from 'react'

//--------ESTILOS--------------
import "./Header.css"

//-----------IMAGENES------------
import img from "../Header/OneWeb_Logo.png"

//-----------COMPONENTES-------------
import Navigation from '../navigation/navigation'



const Header = () => {
  return (
    <div className='header'>

			<img src={img} className="logo" alt="logo"/>
      <Navigation />
      
    </div>
  )
}

export default Header