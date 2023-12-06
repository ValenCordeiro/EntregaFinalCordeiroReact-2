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


export const obtenerTodosLosVideoJuegos = () => {

  return new Promise((res, rej) => {

    setTimeout(() => {

      res(videoJuegos);

      rej("ERROR")

    }, 500);

  });

};


export const obtenerVideoJuegosPorCategoria = (categoria) => {

  return new Promise((res, rej) => {

    const videoJuegosFiltrados = videoJuegos.filter((vid) => vid.categoria === categoria);

    setTimeout(() => {

      res(videoJuegosFiltrados);

      rej("ERROR")

    }, 500);

  });

};


export const obtenerVideoJuegosPorID = (id) => {

  return new Promise((res, rej) => {

    const videoJuegoPorID = videoJuegos.filter((vid) => vid.id === id);

    setTimeout(() => {

      res(videoJuegoPorID);

      rej("ERROR")

    }, 500);

  });

};


export const Datos = () => {

    
    return (
    <>
    </>
  )
}

export default { obtenerTodosLosVideoJuegos, obtenerVideoJuegosPorCategoria, obtenerVideoJuegosPorID }