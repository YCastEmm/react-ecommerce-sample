import { useState } from "react";
import { useCartContext } from "../context/CartContext";


const useCart = () =>{
    const { setCart } = useCartContext();
    const [selectedSize, setSelectedSize] = useState()


    // Añadir un producto al carrito
    const addItemToCart = (item, selectedSize, tieneTalles) => {
        console.log(tieneTalles);
        
        if (!selectedSize && tieneTalles) {
            return false
        }

        const idCart = Math.random().toString(36).substring(2, 9);

        const newItem = { ...item, idCart: idCart, size: selectedSize };

        // Al pasar una función como argumento, le doy acceso al valor anterior del estado (en este caso, el carrito) para que puedas actualizarlo en base a ese valor.
        // Esto es útil para evitar problemas de sincronización y asegurar que siempre estés trabajando con el estado más actualizado.
        setCart((prevCart) => {
            const updatedCart = [...prevCart, newItem];
            console.log(updatedCart);
            return updatedCart;
        });
    };

    const handleSizeChange = (event) => {
        const size = event.target.value;
        setSelectedSize(size);
    };

    return {addItemToCart, handleSizeChange, selectedSize}
}

export default useCart