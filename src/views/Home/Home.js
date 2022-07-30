import React from "react";
import lavado from "../Home/lavado.png"
import "./Home.css"


//--------------COMPONENTES-------------------
import Lineas from "./Lineas";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div>
      <Link to="/rubro/lavarropas">
      <img src={lavado} className="lavado" />
      </Link>
      <Lineas/>
    </div>
  );
};

export default Home;
