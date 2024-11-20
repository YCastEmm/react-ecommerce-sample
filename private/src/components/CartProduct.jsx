import { useCartContext } from "../context/CartContext"; // Asegúrate de importar tu contexto
import CloseIcon from "./icons/CloseIcon";



const CartProduct = ({product}) =>{
    let { cart, setCart } = useCartContext();

    // Remover el último producto del carrito
    const removeItemFromCart = (item) => {
        setCart(cart.filter((cartItem) => cartItem.idCart !== item.idCart));
    };

    return (
        <div className="product-cart" key={product.idCart}>
                <div className="card-cart-img"><img src={product.urlImagen} alt="" /></div>
                <div className="card-cart-name">{product.nombre}</div>
                <div className="card-cart-size">{product.size}</div>
                <div className="card-cart-price"><b>${product.precio}</b></div>

                <button className="card-cart-close" onClick={() => {removeItemFromCart(product)}}><CloseIcon /></button>
        </div>
    )
}

export default CartProduct