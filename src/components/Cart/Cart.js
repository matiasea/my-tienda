import React, { useContext } from 'react';
import ItemCart from './ItemCart';

import { ItemsCartContext } from '../Context/ItemCartContext';


const ItemsCart = () => {
    const [itemsCart, setItemsCart] = useContext(ItemsCartContext);
    

  return (
    <div>
        items cart
        {itemsCart.map((itemCart, idx) => (
          <ItemCart key={idx} itemCart={itemCart} />
        )) }

    </div>

  )
}

export default ItemsCart;