import { React, useState, useEffect, useContext } from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from './CartContext'

const ItemDetail = ({ videoJuego }) => {

  let id = videoJuego.id
  let titulo = videoJuego.titulo
  let precio = videoJuego.precio

  const [cargando, setCargando] = useState(true);
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const {agregarVideoJuego} = useContext(CartContext)

  const agregarCantidad = (cantidad) => {
    setCantidadAgregada(cantidad)

    const videoJuegoCarrito = {
      id, titulo, precio
    }

    agregarVideoJuego(videoJuegoCarrito, cantidad)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {cargando ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="content">
          <Card maxW='sm' bg='purple.200'>
            <CardBody>
              <Image
                src={videoJuego.img}
                alt={videoJuego.titulo}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{videoJuego.titulo}</Heading>
                <Text>
                  Descripción:
                  <br />
                  {videoJuego.descripcion}
                  <br />
                  <br />
                  Categoría: {videoJuego.categoria}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${videoJuego.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              {cantidadAgregada > 0 ?
                (
                  <ButtonGroup spacing='2'>
                    <Link to={'/cart'}>
                      <Button colorScheme='blue' >
                        Finalizar Compra
                      </Button>
                    </Link>
                  </ButtonGroup>)
                :
                (
                  <ButtonGroup spacing='2'>
                    <ItemCount onAdd={agregarCantidad} />
                  </ButtonGroup>)
              }


            </CardFooter>
          </Card>
        </div>
      )}
    </>
  )
}

export default ItemDetail