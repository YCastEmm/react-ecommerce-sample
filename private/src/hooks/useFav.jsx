import { useFavContext } from "../context/FavContext";



const useFav = () =>{
    const { fav, setFav } = useFavContext([]);
    
    const addItemToFav = (item) => {
    
        const newItem = { ...item };
    
        setFav((prevFav) => {
            const updatedFav = [...prevFav, newItem];
            console.log(updatedFav);
            return updatedFav;
        });
    }

    const removeItemFav = (producto) =>{
        setFav(fav.filter((item)=> item._id !== producto._id))
    }

    return {addItemToFav, removeItemFav, fav}
}


export default useFav

