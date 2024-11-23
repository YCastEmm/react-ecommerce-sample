import { useState } from "react";
import useCart from "../hooks/useCart";
import FavButton from "./FavButton";

const CardProduct = ({ producto }) => {
    const { addItemToCart, handleSizeChange, selectedSize } = useCart();
    const [alertaTalle, setAlertaTalle] = useState(true)

    const tieneTalles = producto.talles ? true : false
    
    const handleAddItemToCart = () =>{
        const resultado = addItemToCart(producto, selectedSize, tieneTalles)
        if (resultado === false) {
            setAlertaTalle(resultado)
        }
    }

    return (
        <div className="product-card shadow">

            <FavButton producto={producto}></FavButton>            
            <div className="product-card-content">
                <div className="card-img-container">
                    <img className="product-card-img" src={producto.urlImagen} alt={producto.nombre} />
                </div>
                
                <div className="product-card-info">
                    <h3 className="product-card-title">{producto.nombre}</h3>
                    <p className="product-card-description">{producto.descripcion}</p>
                    
                    <div className="product-card-talles">
                        {producto.talles && producto.talles.length > 0 && (
                        <>
                            <p>Talles</p>
                            <div className="size-options">
                            {producto.talles.map((talle) => (
                                <label key={talle} className="size-option">
                                <input
                                    type="radio"
                                    name="size"
                                    value={talle}
                                    onChange={(e) => {handleSizeChange(e); setAlertaTalle(true)}}
                                />
                                <span>{talle}</span>
                            </label>
                            ))}
                        </div>
                        </>
                        )}
                    </div>

                    <p className="product-card-price">
                        <b>${producto.precio}</b>
                    </p>
                </div>
            </div>
            <div className="btn-div">
                { !alertaTalle && <p className="alerta-talle">Seleccioná un talle para agregar el producto al carrito</p>}
                <button className="addToCart-btn" onClick={handleAddItemToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default CardProduct;
