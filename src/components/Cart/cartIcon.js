
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import { ItemsCartContext } from '../Context/ItemCartContext';
import ItemsCart from './Cart';
import "../Cart/cart.css"


const CartIcon = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    return (    
        <div>
            <Link to="/cart"  className="float-start">
            <LocalGroceryStoreTwoToneIcon />
            <div className="float-md-end numberCart">
            {itemsCart.length > 0 ? (<p>{itemsCart.length}</p>) : null}
            </div>
            </Link>
            
            
        </div>        
        );
};

export default CartIcon;