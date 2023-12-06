import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Box, Center } from '@chakra-ui/react'
import { obtenerVideoJuegosPorID } from './Datos';

const ItemDetailContainer = () => {

    const [videoJuego, setVideoJuego] = useState([]);
    const {id} = useParams()
    
    useEffect(() => {
        obtenerVideoJuegosPorID(id)
        .then((res) => {
            setVideoJuego(res);
        })
        .catch((rej) => {
          console.log(rej)
        })
      }, [id]);


  return (
    <>  
        <Center>
            <Box>
                <ItemDetail id={videoJuego.id} titulo={videoJuego.titulo} precio={videoJuego.precio} categoria={videoJuego.categoria} img={videoJuego.img}/>
            </Box>
        </Center>
    </>

  )
}

export default ItemDetailContainer