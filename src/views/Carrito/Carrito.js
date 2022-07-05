
import React, {useContext} from 'react'

//-------Context---------------
import { ItemsCartContext } from '../../components/Context/ItemCartContext';

const Cart = () => {
  const [itemsCart, setItemsCart, AddToCart] = useContext(ItemsCartContext);

  const cartDelete = []; 
  return (
    <div>
      <p> cart: {itemsCart.length} </p>
    <button onClick={() => setItemsCart(cartDelete)}>Vaciar Carrito</button>;
    </div>
  )
}

export default Cart