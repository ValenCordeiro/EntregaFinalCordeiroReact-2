import React, { useState, useEffect } from 'react';
import { SimpleGrid, Center, Box } from '@chakra-ui/react';

const CheckOut = ({videoJuegosCart}) => {

  return (
    <SimpleGrid>
        <Box bg='purple.300' height='auto'> 
        <Center>
            {videoJuegosCart == undefined ? (
                <p>No hay videojuegos cargados</p>
            ) : (
                <div>
                <h2>Lista de Videojuegos:</h2>
                <ul>
                    {videoJuegosCart.map((vid) => (
                        <Item id={vid.id} titulo={vid.titulo} precio={vid.precio} categoria={vid.categoria}/>
                    ))}
                </ul>
                </div>
            )}
        </Center>
        </Box>
    </SimpleGrid>
  )
}

export default CheckOut