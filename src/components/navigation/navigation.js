import React, {useContext} from 'react'
import "./navigation.css"
import { Link } from "react-router-dom";
import CartIcon from "../Cart/cartIcon";
import { ItemsCartContext } from "../Context/ItemCartContext";

const Navigation = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    return (
        <nav>
            <ul className="nav1">
                <Link to="/" >Inicio</Link>
                <Link to="/Product" >Nustros Productos</Link>
                <Link to="/Postventa" >Postventa</Link>
                <Link to="/Contact" >Contacto</Link>
                <CartIcon/>
                <p> {itemsCart.length} </p>

            </ul>
        </nav>
    )
};

export default Navigation;
