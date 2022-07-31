import React, { useContext } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import "../Cart/cart.css"
import { ItemsCartContext } from '../Context/ItemCartContext';



const ItemsCart = () => {
  const { itemsCart, totalProd } = useContext(ItemsCartContext);
    
  if (itemsCart == 0) {
    return (
      <div>
        <h2 className='CarroVacio'> Tu Carrito esta vacío</h2>
        <Link to="/Product">
          <button className='btnTerminar'>
          Ir a Comprar
          </button>
        </Link>
      </div>)
  }
  return (
    <div className='margin'>
      <table className="table ItemListC">
        <thead>
          <tr>
            <td scope="col" className="ItemCart1"></td>
            <td scope="col" className="ItemCart2">Articulo</td>
            <td scope="col" className="ItemCart1">Precio Unitario</td>
            <td scope="col" className="ItemCart3">Cantidad</td>
            <td scope="col" className="ItemCart2">Precio Total</td>
            <td scope="col" className="ItemCart3"></td>
          </tr>
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