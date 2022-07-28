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
                <Link to="/" className="nav3" aria-current="page">HOME</Link>
                <Link to="/Product" className="nav3 " aria-current="page">TODOS LOS PRODUCTOS</Link>
                <NavCategories className="nav3"/>
                <Link to="/Contact" className="nav3" aria-current="page">CONTACTO</Link>
                
            </ul>
            
            </div>
            </div>
            <CartIcon/>
        </nav>
    )
};

export default Navigation;
