import React from 'react'
import { Link } from 'react-router-dom';

const VerCarrito = () => {
  return (
      <div>
            <Link to="/cart">
            <button className="btnEnviar">Ver Carrito</button>
            </Link>
        </div>
   
  )
}

export default VerCarrito;