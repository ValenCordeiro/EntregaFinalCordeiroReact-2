import React from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import pacMan from '../assets/PacMan.jpeg'
import codBO from '../assets/CoDBO.jpeg'
import minecraft from '../assets/Minecraft.jpeg'
import toTheMoon from '../assets/ToTheMoon.jpeg'
import civilizationVI from '../assets/CivilizationVI.jpeg'
import { Box, Center } from '@chakra-ui/react'

const ItemDetailContainer = () => {

    const {id} = useParams()

    const videoJuegos = [
        { id: 1, titulo: "PacMan", precio: 200, categoria: "Arcade", img: pacMan},
        { id: 2, titulo: "Call Of Duty: Black Ops", precio: 350, categoria: "Acción", img: codBO},
        { id: 3, titulo: "Minecraft", precio: 500, categoria: "Aventuras", img: minecraft},
        { id: 4, titulo: "To The Moon", precio: 150, categoria: "Rol", img: toTheMoon},
        { id: 5, titulo: "Civilization VI", precio: 700, categoria: "Estrategia", img: civilizationVI}
    ]

    const vid = videoJuegos.find((vid) => vid.id === parseInt(id))


  return (
    <>  
        <Center>
            <Box>
                <ItemDetail id={vid.id} titulo={vid.titulo} precio={vid.precio} categoria={vid.categoria} img={vid.img}/>
            </Box>
        </Center>
    </>

  )
}

export default ItemDetailContainer