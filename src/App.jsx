import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {SimpleGrid, Box, Center} from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <SimpleGrid columns={1} spacing={0}>
        <Box bg='purple.300' height='300px'> <NavBar/> </Box>
        <Box bg='purple.300' height='80px'> 
          <Center> 
            <ItemListContainer saludo={"Buenos días/tardes/noches, gracias por ingresar a nuestra página"}/> 
          </Center>
        </Box>
      </SimpleGrid>
    </>

  )
}

export default App