import useFav from "../hooks/useFav";
import FavBtnFill from "./icons/favBtnFill";
import FavBtnStroke from "./icons/favBtnStroke";


const FavButton = ({ producto }) => {
    
    const { addItemToFav, removeItemFav, fav } = useFav();

    const estaEnFav = fav.find((item) => item._id === producto._id);

    const handleAddFav = () => {
        if (!estaEnFav) {
            addItemToFav(producto);
        } else {
            removeItemFav(producto);
        }
    };

    return (
        <button className="product-fav-btn" onClick={handleAddFav}>
            { estaEnFav ? <FavBtnFill size={"48px"} /> : <FavBtnStroke size={"48px"} />}
        </button>
    );
};

export default FavButton;
