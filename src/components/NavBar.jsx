import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Button, Wrap, WrapItem, Center, Flex, Avatar, Box, Badge, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import controlVideojuego from '../assets/videojuego.png'

const NavBar = () => {
  return (
    <>
      <Wrap justify='center'>

        <WrapItem>
          <Center w='200px' h='200px' bg='purple.400'>

            <Flex>

              <Link to={'/'}>

                <Avatar src={controlVideojuego} />

              </Link>

              <Box ml='3'>
                <Text fontWeight='bold'>
                  Tienda de Videojuegos
                </Text>
                <Text fontSize='sm'> La mejor tienda de Videojuegos </Text>
              </Box>

            </Flex>

          </Center>
        </WrapItem>

        <WrapItem>
          <Center w='200px' h='200px' bg='purple.400'>
            <Menu>

              <MenuButton as={Button} bg='purple.500'>
                Categorías
              </MenuButton>

              <MenuList bg='purple.200'>
              
                <Link to={'/category/Arcade'}>
                  <MenuItem bg='purple.200'> Arcade </MenuItem>
                </Link>

                <Link to={'/category/Accion'}>
                  <MenuItem bg='purple.200'> Acción </MenuItem>
                </Link>

                <Link to={'/category/Aventuras'}>
                  <MenuItem bg='purple.200'> Aventuras </MenuItem>
                </Link>

                <Link to={'/category/Rol'}>
                  <MenuItem bg='purple.200'> Rol </MenuItem>
                </Link>

                <Link to={'/category/Estrategia'}>
                  <MenuItem bg='purple.200'> Estrategia </MenuItem>
                </Link>
                
              </MenuList>

            </Menu>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center w='200px' h='200px' bg='purple.400'>
            <Link to={'/cart'}>
              <CartWidget/>
            </Link>
          </Center>
        </WrapItem>

      </Wrap>
        
    </>
  )
}

export default NavBar