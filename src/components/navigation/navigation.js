import "./navigation.css"
import { Link } from "react-router-dom";
import CartWidget from "../carrito/cartWidget"

const Navigation = () => {
    return (
        <nav>
            <ul className="nav1">
                <Link to="/" >Inicio</Link>
                <Link to="/Product" >Nustros Productos</Link>
                <Link to="/Postventa" >Postventa</Link>
                <Link to="/Contact" >Contacto</Link>
                <CartWidget/>
            </ul>
        </nav>
    )
};

export default Navigation;
 