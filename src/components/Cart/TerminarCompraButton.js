import React from 'react'
import { Link } from 'react-router-dom';


const TerminarCompraButton = () => {
  return (
      <div>
            <Link to="/cart">
            <button className='btn btn-dark' size="small"> TERMINAR COMPRA </button>
            </Link>
        </div>
   
  )
}

export default TerminarCompraButton;