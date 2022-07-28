import React from 'react'

import { Link } from 'react-router-dom';

const TerminarCompraButton = () => {
  return (
    <div>
        <Link to="/DatosDeEnvio">
            <button 
                className='btn btn-dark' 
                size="small"
            > 
            Terminar Compra
            </button>
        </Link>
    </div>
  )
}

export default TerminarCompraButton