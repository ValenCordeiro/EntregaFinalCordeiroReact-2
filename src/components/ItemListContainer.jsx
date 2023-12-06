import { SimpleGrid, Center, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { obtenerTodosLosVideoJuegos, obtenerVideoJuegosPorCategoria } from './Datos';

const ItemListContainer = () => {
  const [filtroVideojuegos, setFiltroVideojuegos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria !== undefined) {
      obtenerVideoJuegosPorCategoria(categoria)
      .then((res) => {
        setFiltroVideojuegos(res);
      })
      .catch((rej) => {
        console.log(rej)
      })
    } else {
      obtenerTodosLosVideoJuegos()
      .then((res) => {
        setFiltroVideojuegos(res);
      })
      .catch((rej) => {
        console.log(rej)
      })
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
