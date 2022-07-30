import React from 'react'
import { Link } from "react-router-dom";
//-----------Estilos------------------
import "./Home.css"


//---------------Views-------------------
import LineasView from './RubroType'

//------------IMAGENES ----------------
import lavarropas from "../Home/lavarropas.png"
import celulares from "../Home/celulares.png"
import cocinas from "../Home/cocinas.png"
import televisores from "../Home/televisores.png"
import heladeras from "../Home/heladeras.png"
import bicicletas from "../Home/bicicletas.png"

const lineas = () => {
  return (
    
    <div className='divImg'>
        <Link to="/rubro/televisores">
        <div>
            <img src={televisores} className="imgLineas" />
            <p className='txtLineas'>Televisores</p>
        </div>
        </Link>
        <Link to="/rubro/celulares">
        <div>
        <img src={celulares} className="imgLineas" />
        <p className='txtLineas'>Celulares</p>
        </div>
        </Link>
        <Link to="/rubro/heladeras">
        <div>
        <img src={heladeras} className="imgLineas" />
        <p className='txtLineas'>Heladeras</p>
        </div>
        </Link>
        <Link to="/rubro/cocinas">
        <div>
        <img src={cocinas} className="imgLineas" />
        <p className='txtLineas'>Cocinas</p>
        </div>
        </Link>
        <Link to="/rubro/bicicletas">
        <div>
        <img src={bicicletas} className="imgLineas" />
        <p className='txtLineas'>Bicicletas</p>
        </div>
        </Link>
        
    </div>
    
  )
}

export default lineas