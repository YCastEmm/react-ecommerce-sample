import { createContext, useState, useContext } from "react";


export const CartContext = createContext()


const CartProvider =  ({children}) =>{

    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider

export const useCartContext = () =>{
    return useContext(CartContext)
}