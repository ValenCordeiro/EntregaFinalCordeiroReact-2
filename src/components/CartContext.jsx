import {createContext, useState} from 'react'

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({ hijos }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarVideoJuego = (videoJuego, cantidad) => {
        if(!estaEnElCarrito(videoJuego.id)) {
            setCarrito(videoJuegosPrevios => [...videoJuegosPrevios, {...videoJuego, cantidad}])
        }
        console.log(carrito)
    }

    const removerVideoJuego = (id) => {
        const carritoActualizado = carrito.filter(vid => vid.id !== id)
        setCarrito(carritoActualizado)
    }

    const borrarCarrito = () => {
        setCarrito([])
    }

    const estaEnElCarrito = (id) => {
        return carrito.some(vid => vid.id === id)
    }

    return (
        <CartContext.Provider value={{carrito, agregarVideoJuego, removerVideoJuego, borrarCarrito}}>
            { hijos }
        </CartContext.Provider>
    )
}

export default CartProvider