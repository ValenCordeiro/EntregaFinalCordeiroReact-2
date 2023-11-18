import { SimpleGrid, Center, Box } from '@chakra-ui/react'
import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {

  const {categoria} = useParams()
  
  const videoJuegos = [
    { id: 1, titulo: "PacMan", precio: 200, categoria: "Arcade", img:'./assets/PacMan.jpeg'},
    { id: 2, titulo: "Call Of Duty: Black Ops", precio: 350, categoria: "Acción", img:'./assets/CoDBO.jpeg'},
    { id: 3, titulo: "Minecraft", precio: 500, categoria: "Aventuras", img:'./assets/Minecraft.jpeg'},
    { id: 4, titulo: "To The Moon", precio: 150, categoria: "Rol", img:'./assets/ToTheMoon.jpeg'},
    { id: 5, titulo: "Civilization VI", precio: 700, categoria: "Estrategia", img:'./assets/CivilizationVI.jpeg'}
  ]

  const filtroVideojuegos = videoJuegos.filter((vid) => vid.categoria === categoria); 

  return (
    <>

      <SimpleGrid>
        <Box bg='purple.300' height='auto'> 
          <Center> 
            <ItemList videoJuegos={categoria == undefined ? videoJuegos : filtroVideojuegos}/>
          </Center>
        </Box>
      </SimpleGrid>

    </>
  )
}

export default ItemListContainer