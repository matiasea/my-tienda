import React, { useContext } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import "../Cart/cart.css"

import { ItemsCartContext } from '../Context/ItemCartContext';
import { Button } from '@mui/material';


const ItemsCart = () => {
  const { itemsCart, setItemsCart, totalProd } = useContext(ItemsCartContext);
  const total = itemsCart.reduce((acc, item) =>
    acc + item.precio, 0)

  
  if (itemsCart == 0) {
    return (
      <div>
        <h2 className='CarroVacio'> Tu Carrito esta vacío</h2>
        <Link to="/Product"><Button type="button" class="btn btn-dark"> Ir a Comprar </Button></Link>
      </div>)
  }
  return (
    <div className='margin'>
      <table className="table ItemListC">
        <thead >
          <th scope="col" className="ItemCart1"></th>
          <th scope="col" className="ItemCart2">Articulo</th>
          <th scope="col" className="ItemCart1">Precio Unitario</th>
          <th scope="col" className="ItemCart3">Cantidad</th>
          <th scope="col" className="ItemCart2">Precio Total</th>
          <th scope="col" className="ItemCart3"></th>

        </thead>
      </table>
      {itemsCart.map((itemsCart) => (
        <ItemCart key={itemsCart.id} itemsCart={itemsCart} />
      ))}
      <thead >
        <tr >
          <th className='total'>Total: ${totalProd(itemsCart)}</th>
        </tr>
      </thead>
      
    </div>
  )
}

export default ItemsCart;