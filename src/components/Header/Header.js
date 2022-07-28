import React, {useContext} from 'react'

//-------Context---------------
import { ItemsCartContext } from '../Context/ItemCartContext';

import "./Header.css"
import img from "../Header/OneWeb_Logo.png"
import Navigation from '../navigation/navigation'


const Header = () => {
  const { itemsCart, setItemsCart, AddToCart } = useContext(ItemsCartContext);

  return (
    <div className='header'>

			<img src={img} className="logo"/>
      <Navigation />
      
    </div>
  )
}

export default Header