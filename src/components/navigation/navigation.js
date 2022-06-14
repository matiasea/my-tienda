import "./navigation.css"
import CartWidget from "../carrito/cartWidget"

const Navigation = () => {
    return (
        <nav>
            <ul className="nav1">
                <li>Inicio</li>
                <li>Quienes somos</li>
                <li>Nustros Productos</li>
                <li>Postventa</li>
                <li>Contacto</li>
                <CartWidget/>
            </ul>
        </nav>
    )
};

export default Navigation;
 