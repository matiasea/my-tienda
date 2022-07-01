import React from 'react'
import { Link } from 'react-router-dom';


const TerminarCompraButton = () => {
  return (
      <div>
            <Link to="/cart">
            <button> TERMINAR COMPRA </button>
            </Link>
        </div>
   
  )
}

export default TerminarCompraButton;