import React from 'react'
import pacMan from '../assets/PacMan.jpeg'
import codBO from '../assets/CoDBO.jpeg'
import minecraft from '../assets/Minecraft.jpeg'
import toTheMoon from '../assets/ToTheMoon.jpeg'
import civilizationVI from '../assets/CivilizationVI.jpeg'

export const videoJuegos = [
    { id: 1, titulo: "PacMan", precio: 200, categoria: "Arcade", img: pacMan},
    { id: 2, titulo: "Call Of Duty: Black Ops", precio: 350, categoria: "Acción", img: codBO},
    { id: 3, titulo: "Minecraft", precio: 500, categoria: "Aventuras", img: minecraft},
    { id: 4, titulo: "To The Moon", precio: 150, categoria: "Rol", img: toTheMoon},
    { id: 5, titulo: "Civilization VI", precio: 700, categoria: "Estrategia", img: civilizationVI}
]

export const Datos = () => {

    
    return (
    <>
    </>
  )
}

export default {Datos, videoJuegos}