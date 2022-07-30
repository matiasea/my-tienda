import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


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