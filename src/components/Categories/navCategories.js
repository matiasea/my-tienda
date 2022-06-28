import "./categories.css"
import { Link } from "react-router-dom";

const NavCategories = () => {
    return (
        <nav>
            <ul className="categories">
                <li to="" className="categories1">Electrohogar</li>
                <li to="" className="categories1" >Tv, Audio y Video</li>
                <li to="" className="categories1">Pequeños Electrodomesticos</li>
            </ul>
        </nav>
    )
};

export default NavCategories;
