import React from "react";

//------------Imagenes----------------
import lavado from "../Home/lavado.png"

//-----------Estilos--------------
import "./Home.css"


//--------------COMPONENTES-------------------
import Lineas from "./Lineas";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div>
      <Link to="/rubro/lavarropas">
      <img src={lavado} className="lavado" alt="portada" />
      </Link>
      <Lineas/>
    </div>
  );
};

export default Home;
