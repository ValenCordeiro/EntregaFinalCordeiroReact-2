import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, titulo, precio, categoria}) => {
  return (
    <>
      <Link to={`/item/${id}`}>
        <h3> ID: {id} |° °| Título: {titulo} |° °| Precio: {precio} |° °| Categoría: {categoria} </h3>
      </Link>
    </>
  )
}

export default Item