import React, { useContext } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import "../Cart/cart.css"

import { ItemsCartContext } from '../Context/ItemCartContext';
import { Button } from '@mui/material';


const ItemsCart = () => {
    const {itemsCart, setItemsCart, totalProd} = useContext(ItemsCartContext);
    const total = itemsCart.reduce( (acc, item ) => 
     acc + item.precio, 0)
    
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
      <table className="table">
   <thead>
      <th scope="col" className="ItemCart1"></th>
      <th scope="col" className="ItemCart2">Articulo</th>
      <th scope="col"className="ItemCart1">Precio</th>
      <th scope="col" className="ItemCart3">Cantidad</th>
      <th scope="col" className="ItemCart4"></th>
    
  </thead>
  </table>
        {itemsCart.map((itemsCart, idx) => (
          <ItemCart key={idx} itemsCart={itemsCart} />
        )) }
        <thead className='total'>
          <tr>
            <th scope="col" className='total' >Total: ${total}</th>
          </tr>
        </thead>
        <p> Total: ${total} </p>
    </div>
  )
}

export default ItemsCart;