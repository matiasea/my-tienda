import React, {useContext} from 'react'
import "./navigation.css"
import { Link } from "react-router-dom";
import CartIcon from "../Cart/cartIcon";
import { ItemsCartContext } from "../Context/ItemCartContext";

const Navigation = () => {
    const {itemsCart, setItemsCart} = useContext(ItemsCartContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <ul className="navbar-nav">
                <Link to="/" className="nav-item nav-link active" aria-current="page">Inicio</Link>
                <Link to="/Product" className="nav-item nav-link active" aria-current="page">Nustros Productos</Link>
                <Link to="/Postventa" className="nav-item nav-link active" aria-current="page">Postventa</Link>
                <Link to="/Contact" className="nav-item nav-link active" aria-current="page">Contacto</Link>
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            </ul>
            </div>
            </div>
            <CartIcon/>
        </nav>
    )
};

export default Navigation;
