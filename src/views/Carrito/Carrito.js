
import React, {useContext} from 'react'
//--------COMPONENT------------
import ItemsCart from '../../components/Cart/Cart';
import TerminarCompraButton from '../../components/Cart/TerminarCompraButton';

//-------Context---------------
import { ItemsCartContext } from '../../components/Context/ItemCartContext';

//----------Estilos---------------
import "./carrito.css"

const Cart = () => {
  const {itemsCart, setItemsCart} = useContext(ItemsCartContext);

  const cartDelete = []; 
  return (
    <div>
      <div>
      <ItemsCart />
      </div>
      <div className='botonesCart'>
      { itemsCart.length > 0 ? (<button onClick={() => setItemsCart(cartDelete)} type="button" className="btnVaciar" >Vaciar Carrito</button>) : null }
      { itemsCart.length > 0 ? ( <TerminarCompraButton/>): null }
      </div>
    </div>
  )
}

export default Cart