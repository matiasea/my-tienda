import React, {useContext} from 'react';
import { ItemsCartContext } from '../Context/ItemCartContext'

const ItemCart = ({itemCart}) => {

  const [ItemsCart, setItemsCart, AddToCart] = useContext(ItemsCartContext);

  return (
    <div>
        <ul>
            <li>Categoria: {itemCart.categoria}  </li>
            <li>Precio: {itemCart.precio}</li>
            <li>Articulo: {itemCart.articulo}</li>
            <li>Precio: {itemCart.precio}</li>
        </ul>
        <button onClick={() => AddToCart()}>Agregar Carrito</button>
    </div>
  )
}

export default ItemCart