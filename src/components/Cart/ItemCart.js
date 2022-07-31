import React, {useContext} from 'react';
import { ItemsCartContext } from '../Context/ItemCartContext'

//---------ESTILOS------------
import "./cart.css"

//--------------IMAGENES----------
import imgEliminar from "../Cart/eliminar.png"


const ItemCart = ({itemsCart}) => {
  const { ItemRemove, }= useContext(ItemsCartContext);
    return (
    <div className='ItemCart'>
      <table className=" ItemList">
        <tbody>
         <tr>
            <td>
            <img src={itemsCart.img} alt={itemsCart.id} width="80px"/></td> 
            <td className="ItemCart2 ">{itemsCart.articulo}</td>
            <td className="ItemCart1">${itemsCart.precio}</td>
            <td className="ItemCart3">{itemsCart.amount} </td>
            <td className="ItemCart2">
              ${itemsCart.amount * itemsCart.precio}{" "}
            </td>
            <td className="ItemCart3"><button
            className='btnRemoveItem'
            onClick={
              () => ItemRemove(itemsCart.id)}
              > {" "}
              <img src={imgEliminar} className="btn-eliminar" alt="btn-eliminar" />{" "}
            </button>
            </td>
        </tr>
      </tbody>
    </table>
</div>

  )
  
}


export default ItemCart