import {React, useState, useEffect} from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'

const ItemDetail = ({id, titulo, precio, categoria, img}) => {

    const [cargando, setCargando] = useState(true);

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
                    src={img}
                    alt={titulo}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{titulo}</Heading>
                    <Text>
                        {categoria}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${precio}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
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