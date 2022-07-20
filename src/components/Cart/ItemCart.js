import React, {useContext} from 'react';
import { ItemsCartContext } from '../Context/ItemCartContext'
import ItemCount from '../ItemCount/itemCount';
import "./cart.css"
import imgEliminar from "../Cart/eliminar.png"


const ItemCart = ({itemsCart}) => {

  const { i, seti, AddToCart, IdProd, ItemRemove }= useContext(ItemsCartContext);

  const eliminarDelCarrito = () => {
    {ItemRemove()};
    console.log(itemsCart.amount);
  };   

  return (
    <div className='ItemCart'>
    <table className="table">
  <tbody>
    <tr>
      <th scope="row" className="ItemCart1"><img src={itemsCart.img} width="100px"/></th>
      <td className="ItemCart2">{itemsCart.articulo}</td>
      <td className="ItemCart1">${itemsCart.precio}</td>
      <td className="ItemCart3">{itemsCart.amount} </td>
      <td className="ItemCart4"><button onClick={eliminarDelCarrito} type="button" class="btn btn-light"> <img src={imgEliminar} className="btn-eliminar" /> </button></td>
    </tr>
  </tbody>
</table>

</div>

  )
  
}


export default ItemCart