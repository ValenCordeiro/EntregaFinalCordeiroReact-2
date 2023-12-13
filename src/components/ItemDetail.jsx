import {React, useState, useEffect} from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'

const ItemDetail = ({videoJuego}) => {

    const [cargando, setCargando] = useState(true);
    const [productosCarrito, setproductosCarrito] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCargando(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);

    const [cantidad, setCantidad] = useState(1);
      
    const incremento = () => {
      setCantidad(cantidadPrevia => cantidadPrevia + 1);
    };
      
    const decremento = () => {
      if (cantidad > 1) {
        setCantidad(cantidadPrevia => cantidadPrevia - 1);
      }
    };
      
    const añadirAlCarrito = () => {
      const productoEnCarrito = {
        producto: videoJuego,
        cantidadAgregada: cantidad,
      }
      setproductosCarrito(itemsPrevios => [...itemsPrevios, productoEnCarrito]);
    };

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
                    <ButtonGroup spacing='2'>
                      <Button onClick={decremento}>-</Button>
                      <Button disabled>{cantidad}</Button>
                      <Button onClick={incremento}>+</Button>
                      <Button variant='ghost' colorScheme='blue' onClick={añadirAlCarrito}>
                        Añadir al carrito
                      </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
      )}
    </>
  )
}

export default ItemDetail