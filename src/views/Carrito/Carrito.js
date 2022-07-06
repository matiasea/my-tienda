
import React, {useContext} from 'react'
//--------COMPONENT------------
import ItemsCart from '../../components/Cart/Cart';

//-------Context---------------
import { ItemsCartContext } from '../../components/Context/ItemCartContext';

const Cart = () => {
  const {itemsCart, setItemsCart, AddToCart} = useContext(ItemsCartContext);

  const cartDelete = []; 
  return (
    <div>
      <p> cart: {itemsCart.length} </p>
      <div>
      <ItemsCart />
      </div>
      
    <button onClick={() => setItemsCart(cartDelete)}>Vaciar Carrito</button>;
    </div>
  )
}

export default Cart