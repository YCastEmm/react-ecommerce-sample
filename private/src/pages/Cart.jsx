import { useCartContext } from "../context/CartContext"; // Asegúrate de importar tu contexto
import bannerlg from "../assets/banner-lg.webp";
import CartProduct from "../components/CartProduct";
import emptyCart from "../assets/empty_cart.webp";
import { Link } from "react-router-dom";


const Cart = () => {
    let { cart } = useCartContext();

    return (
        <div>
            <img className="banner" src={bannerlg} alt="Banner"></img>
            <div className="width-content cart-container">
                {cart.length > 0 ? (
                    <>
                        <h1 className="cart-title">Tus artículos en el carrito</h1>
                        {cart.map((product) => (
                            <CartProduct key={product.id} product={product} />
                        ))}
                    </>
                ) : (
                    <div className="empty-cart-container">
                        <div className="empty-cart-img"><img src={emptyCart} alt="" /></div>
                        <div className="empty-cart-text">
                            <div className="empty-cart-p"><p>Sumá productos al carrito y conseguí envío gratis</p></div>
                            <div className="empty-cart-link"><Link to="/catalogo">Explorar productos</Link></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
