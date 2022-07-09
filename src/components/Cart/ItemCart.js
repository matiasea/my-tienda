import React, {useContext} from 'react';
import { ItemsCartContext } from '../Context/ItemCartContext'
import ItemCount from '../ItemCount/itemCount';
import "./cart.css"
import imgEliminar from "../Cart/eliminar.png"


const ItemCart = ({itemsCart}) => {

  const { i, seti, AddToCart, IdProd, ItemRemove }= useContext(ItemsCartContext);

  const eliminarDelCarrito = () => {
    {ItemRemove()}
  };   

  return (
    <div className='ItemCart'>
    <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Articulo</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{itemsCart.image}</th>
      <td>{itemsCart.title}</td>
      <td>${itemsCart.price}</td>
      <td><ItemCount /></td>
      <td><button onClick={eliminarDelCarrito} type="button" class="btn btn-light"> <img src={imgEliminar} className="btn-eliminar" /> </button></td>
    </tr>
  </tbody>
</table>
</div>
  )
}

export default ItemCart