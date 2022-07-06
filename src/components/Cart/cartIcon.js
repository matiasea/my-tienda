
import React from 'react'
import { Link } from 'react-router-dom';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';;


const CartIcon = () => {
    return (    
        <div>
            <Link to="/cart">
            <LocalGroceryStoreTwoToneIcon />
            </Link>
        </div>        
        );
};

export default CartIcon;