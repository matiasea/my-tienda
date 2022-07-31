import React, {useContext} from 'react'

//------------Estilos------------------
import "./navigation.css"

//------------Componentes---------------
import CartIcon from "../Cart/cartIcon";
import NavCategories from '../Categories/navCategories';

import { Link } from "react-router-dom";
import { ItemsCartContext } from "../Context/ItemCartContext";


const Navigation = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
            <div className="navbar-collapse">

            <ul className="nav3">
                <Link to="/" className="nav3" aria-current="page">Home</Link>
                <Link to="/Product" className="nav3 " aria-current="page">Todos los productos</Link>
                <NavCategories className="nav3"/>
            </ul>
            </div>
            </div>
            <CartIcon/>
        </nav>
    )
};

export default Navigation;
