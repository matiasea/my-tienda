import React from 'react'
import { Link } from 'react-router-dom';

//---------Estilos-----------
import "./cart.css"

const TerminarCompraButton = () => {
  return (
    <div>
        <Link to="/DatosDeEnvio">
            <button 
                className="btnTerminar"
            > 
            Terminar Compra
            </button>
        </Link>
    </div>
  )
}

export default TerminarCompraButton