import "./navigation.css"
import { Link } from "react-router-dom";
import CartIcon from "../Cart/cartIcon";

const Navigation = () => {
    return (
        <nav>
            <ul className="nav1">
                <Link to="/" >Inicio</Link>
                <Link to="/Product" >Nustros Productos</Link>
                <Link to="/Postventa" >Postventa</Link>
                <Link to="/Contact" >Contacto</Link>
                <CartIcon/>
            </ul>
        </nav>
    )
};

export default Navigation;
