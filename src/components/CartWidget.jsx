import React from 'react'
import carritoCompra from '../assets/carroCompra.png'

const CartWidget = () => {
  return (
    <>
        <h5>
          <img src={carritoCompra} alt="" /> 
        </h5>
        
        <span>0</span>
    </>
  )
}

export default CartWidget