import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Button, Wrap, WrapItem, Center, Flex, Avatar, Box, Badge, Text} from '@chakra-ui/react'
import controlVideojuego from '../assets/videojuego.png'

const NavBar = () => {
  return (
    <>
      <Wrap justify='center'>
        <WrapItem>
          <Center w='200px' h='200px' bg='purple.400'>
          <Flex>
            <a href="https://www.flaticon.es/iconos-gratis/palanca-de-mando" title="palanca de mando iconos" target='blank'> 
              <Avatar src={controlVideojuego} /> 
            </a>
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
            <MenuItem bg='purple.200'> Arcade </MenuItem>
            <MenuItem bg='purple.200'> Acción </MenuItem>
            <MenuItem bg='purple.200'> Aventuras </MenuItem>
            <MenuItem bg='purple.200'> Rol </MenuItem>
            <MenuItem bg='purple.200'> Estrategia </MenuItem>
        </MenuList>
        </Menu>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='200px' h='200px' bg='purple.400'>
          <CartWidget/>
          </Center>
        </WrapItem>
      </Wrap>
        
    </>
  )
}

export default NavBar