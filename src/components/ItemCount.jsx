import {React, useState} from 'react'
import { ButtonGroup, Button } from '@chakra-ui/react'

const ItemCount = ({onAdd}) => {
    const [cantidad, setCantidad] = useState(1);
      
    const incremento = () => {
      setCantidad(cantidadPrevia => cantidadPrevia + 1);
    };
      
    const decremento = () => {
      if (cantidad > 1) {
        setCantidad(cantidadPrevia => cantidadPrevia - 1);
      }
    };

  return (
    <>  <ButtonGroup spacing='2'>

            <Button onClick={decremento}>-</Button>
            <Button disabled>{cantidad}</Button>
            <Button onClick={incremento}>+</Button>

            <Button variant='ghost' colorScheme='blue' onClick={() => onAdd(cantidad)}>
                Añadir al carrito
            </Button>
        </ButtonGroup>
    </>
  )
}

export default ItemCount