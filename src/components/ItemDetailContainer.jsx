import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Box, Center } from '@chakra-ui/react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [videoJuego, setVideoJuego] = useState([]);
    const {id} = useParams()

    useEffect(() => {

      const dataBase = getFirestore()

      const unVideoJuego = doc(dataBase, `VideoJuegos`, `${id}`)

      getDoc(unVideoJuego).then((snapshot) => {

        if (snapshot.exists()) {
          const doc = snapshot.data()
          setVideoJuego(doc)
        }

      })
      
  }, [id]);


  return (
    <>  
        <Center>
            <Box>
                <ItemDetail videoJuego={videoJuego}/>
            </Box>
        </Center>
    </>

  )
}

export default ItemDetailContainer