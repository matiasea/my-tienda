import React, {useContext} from 'react';
import { ItemsCartContext } from '../Context/ItemCartContext'
import ItemCount from '../ItemCount/itemCount';
import "./cart.css"
import imgEliminar from "../Cart/eliminar.png"


const ItemCart = ({itemsCart}) => {

  const { i, seti, AddToCart, IdProd, ItemRemove, }= useContext(ItemsCartContext);
    return (
    <div className='ItemCart'>
      <table className=" ItemList">
        <tbody>
         <tr>
          <th scope="row">
            <img src={itemsCart.img} alt={itemsCart.id} width="80px"/></th> 
          <td className="ItemCart2 ">{itemsCart.articulo}</td>
          <td className="ItemCart1">${itemsCart.precio}</td>
          <td className="ItemCart3">{itemsCart.amount} </td>
          <td className="ItemCart2">
            ${itemsCart.amount * itemsCart.precio}{" "}
          </td>
            <td className="ItemCart3"><button
            onClick={() => ItemRemove(itemsCart.id)} 
            type="button" 
            class="btn btn-light"
            > {" "}
              <img src={imgEliminar} className="btn-eliminar" />{" "}
              
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</div>

  )
  
}


export default ItemCart