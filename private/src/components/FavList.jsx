import useFav from "../hooks/useFav";
import CloseIcon from "./icons/CloseIcon";

const FavList = () => {
    let { fav, removeItemFav } = useFav();


    return (
        <div className="fav-list">
            {fav.length > 0 ? 

            fav.map((producto) => (

                <div className="item-lista-fav" key={producto._id}>
                    <div className="lista-fav-img"><img src={producto.urlImagen} alt="" /></div>
                    <div className="lista-fav-name">{producto.nombre}</div>
                    <div className="lista-fav-price"><b>${producto.precio}</b></div>
                    <div className="lista-fav-close"><button onClick={() =>removeItemFav(producto)}> <CloseIcon></CloseIcon> </button></div>
                </div>
            ))
                        
            : <div className="lista-fav-no-items"><p>No hay artículos en favoritos</p></div>  }
        </div>
    );
};

export default FavList;
