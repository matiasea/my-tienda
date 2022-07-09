import React, {useContext} from 'react'
import "./navigation.css"
import { Link } from "react-router-dom";
import CartIcon from "../Cart/cartIcon";
import { ItemsCartContext } from "../Context/ItemCartContext";

const Navigation = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    return (
        <nav className='nav1'>
            <ul className="nav justify-content-center">
                <Link to="/" className="nav-item nav-link active" aria-current="page">Inicio</Link>
                <Link to="/Product" className="nav-item nav-link active" aria-current="page">Nustros Productos</Link>
                <Link to="/Postventa" className="nav-item nav-link active" aria-current="page">Postventa</Link>
                <Link to="/Contact" className="nav-item nav-link active" aria-current="page">Contacto</Link>
                <CartIcon/>
                

            </ul>
        </nav>
    )
};

export default Navigation;
