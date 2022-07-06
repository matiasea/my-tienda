import React, {useContext} from 'react';
import { ItemsCartContext } from '../Context/ItemCartContext'
import ItemCount from '../ItemCount/itemCount';
import "./cart.css"


const ItemCart = ({itemCart}) => {

  const { ItemsCart, setItemsCart, AddToCart }= useContext(ItemsCartContext);

  return (
    <div className='ItemCart'>
        <ul>
            <li>Categoria: {itemCart.image}  </li>
            <li>Articulo: {itemCart.title}</li>
            <li>Precio: {itemCart.price}</li>
            <ItemCount />      
            
            
        </ul>
        
    </div>
  )
}

export default ItemCart