import "./categories.css"
import { Link } from "react-router-dom";

const NavCategories = () => {
    return (
        <nav>
            <ul className="categories">
                <Link to="/linea/electrohogar">Electrohogar</Link>
                <Link to="/linea/tvaudiovideo" >Tv, Audio y Video</Link>
                <Link to="/linea/pequenios" >Pequeños Electrodomesticos</Link>
                <Link to="/linea/rodados" >Rodados</Link>
                <Link to="/linea/tecnologia" >Tecnologia</Link>
            </ul>
        </nav>
    )
};

export default NavCategories;
