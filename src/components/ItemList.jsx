import React from 'react'
import Item from './Item'
import { Box, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemList = ({videoJuegos}) => {

    const {categoria} = useParams()

    let categoriaMostrar = '';
    if (categoria && videoJuegos.length > 0) {
      const primerJuegoCategoria = videoJuegos.find(juego => juego.categoria === categoria);
      categoriaMostrar = primerJuegoCategoria ? primerJuegoCategoria.categoria : 'Video Juegos:';
    } else {
      categoriaMostrar = 'VideoJuegos:';
    }

    return (
    <>

        <Flex direction={'column'}>

            <Box bg='purple.500' w='100%' p={4} color='white'>
                <h1> {categoriaMostrar} </h1>
            </Box>

            <Box bg='purple.500' w='100%' p={4} color='white'>
                {videoJuegos.map((vid) => (
                    <Item id={vid.id} titulo={vid.titulo} precio={vid.precio} categoria={vid.categoria}/>
                ))}
            </Box>
        </Flex>

    </>
  )
}

export default ItemList