import React, { useContext } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import "../Cart/cart.css"

import { ItemsCartContext } from '../Context/ItemCartContext';
import { Button } from '@mui/material';


const ItemsCart = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    const total = itemsCart.reduce( (acc, item ) => 
     acc + item.price, 0)
    
    console.log(total)

    if (itemsCart == 0) {
      return (
      <div>
        <h2> Tu Carrito esta vacío</h2>
        <Link to="/Product"><Button type="button" class="btn btn-dark"> Ir a Comprar </Button></Link>
      </div>)     
    }
    return (
    <div>
        {itemsCart.map((itemsCart, idx) => (
          <ItemCart key={idx} itemsCart={itemsCart} />
        )) }
        <thead className='total'>
          <tr>
            <th scope="col" >Total: ${total}</th>
          </tr>
        </thead>
        <p> Total: ${total} </p>
    </div>
  )
}

export default ItemsCart;