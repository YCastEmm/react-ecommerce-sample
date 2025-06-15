import { createContext, useState, useContext } from "react";


export const FavContext = createContext()


const FavProvider =  ({children}) =>{

    const [fav, setFav] = useState([])

    return (
        <FavContext.Provider value={{fav, setFav}}>
            {children}
        </FavContext.Provider>
    )
}


export default FavProvider

export const useFavContext = () =>{
    return useContext(FavContext)
}