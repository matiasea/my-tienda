
import React, {useContext} from 'react'
//--------COMPONENT------------
import ItemsCart from '../../components/Cart/Cart';
import TerminarCompraButton from '../../components/Cart/TerminarCompraButton';

//-------Context---------------
import { ItemsCartContext } from '../../components/Context/ItemCartContext';

const Cart = () => {
  const {itemsCart, setItemsCart} = useContext(ItemsCartContext);

  const cartDelete = []; 
  return (
    <div>
      <div>
      <ItemsCart />
      </div>
      { itemsCart.length > 0 ? (<button onClick={() => setItemsCart(cartDelete)} type="button" class="btn btn-dark" >Vaciar Carrito</button>) : null }
    
      { itemsCart.length > 0 ? ( <TerminarCompraButton/>): null }
    </div>
  )
}

export default Cart