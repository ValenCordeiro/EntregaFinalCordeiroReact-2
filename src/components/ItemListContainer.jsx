import { SimpleGrid, Center, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const [filtroVideojuegos, setFiltroVideojuegos] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {

    const dataBase = getFirestore()

    if (categoria !== undefined) {
      const videoJuegosCollection = collection(dataBase, `${categoria}`)

      getDocs(videoJuegosCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc => {
          let documento = {
            ...doc.data(), id: doc.id
          }
  
          return documento
        
        }))
  
        setFiltroVideojuegos(docs)
  
      })
    } else {
      const videoJuegosCollection = collection(dataBase, `VideoJuegos`)

      getDocs(videoJuegosCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc => {
          let documento = {
            ...doc.data(), id: doc.id
          }
  
          return documento
        
        }))
  
        setFiltroVideojuegos(docs)
  
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
