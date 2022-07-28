import React from 'react'

import { Alert } from '@mui/material'

const MessageOk = ({comprasID}) => {
  return (
    <div>
        <Alert 
        severity="success" 
        color="info">
        Gracias por elegirnos! Su Id de compra es: {comprasID}
        </Alert>
    </div>
  )
}

export default MessageOk