import { SimpleGrid, Center, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {Datos, videoJuegos } from './Datos';

const ItemListContainer = () => {
  const [filtroVideojuegos, setFiltroVideojuegos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria !== undefined) {
      const juegosFiltrados = videoJuegos.filter((videoJuego) => videoJuego.categoria === categoria);
      setFiltroVideojuegos(juegosFiltrados);
    } else {
      setFiltroVideojuegos(videoJuegos);
    }
  }, [categoria]);
  
  return (
    <SimpleGrid>
      <Box bg='purple.300' height='auto'> 
        <Center> 
          <ItemList videoJuegos={filtroVideojuegos} />
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default ItemListContainer;
