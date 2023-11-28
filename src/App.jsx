import {React,} from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {SimpleGrid, Box} from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
          
          <SimpleGrid columns={1} spacing={0} bg='purple.300'>

            <Box bg='purple.300' height='300px'>
              <NavBar/>
            </Box>

            <Routes>

              <Route exact path='/' element={<ItemListContainer/>} />
              <Route exact path='/category/:categoria' element={<ItemListContainer/>} />
              <Route exact path='/item/:id' element={<ItemDetailContainer/>} />

            </Routes>

          </SimpleGrid>
        


      </BrowserRouter>

    </>

  )
}

export default App