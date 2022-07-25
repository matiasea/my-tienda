import React, {useContext} from 'react'
import "./navigation.css"
import { Link } from "react-router-dom";
import CartIcon from "../Cart/cartIcon";
import { ItemsCartContext } from "../Context/ItemCartContext";
import NavCategories from '../Categories/navCategories';

const Navigation = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <ul className="navbar-nav">
                <Link to="/" className="nav-item nav-link active nav3" aria-current="page">Inicio</Link>
                <Link to="/Product" className="nav-item nav-link active nav3 " aria-current="page">Nustros Productos</Link>
                <Link to="/Postventa" className="nav-item nav-link active nav3" aria-current="page">Postventa</Link>
                <Link to="/Contact" className="nav-item nav-link active nav3" aria-current="page">Contacto</Link>
                
            </ul>
            <NavCategories className="nav3"/>
            </div>
            </div>
            <CartIcon/>
        </nav>
    )
};

export default Navigation;
