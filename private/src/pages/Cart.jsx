import { useCartContext } from "../context/CartContext"; // Asegúrate de importar tu contexto
import bannerlg from "../assets/banner-lg.webp";
import CartProduct from "../components/CartProduct";
import emptyCart from "../assets/empty_cart.webp";
import { Link } from "react-router-dom";
import CartTotal from "../components/CartTotal"
import CuotasSinInteres from "../components/FreeShipping";


const Cart = () => {
    let { cart } = useCartContext();

    return (
        <div>
            <img className="banner" src={bannerlg} alt="Banner"></img>
                <CuotasSinInteres></CuotasSinInteres>
            <div className="width-content cart-container">
                
                {cart.length > 0 ? (
                    <>
                        <div className="cart-total-monto">
                            <div>
                                <h3 className="title-cart">Todo lo que necesitas para llegar más lejos</h3>
                                <h3 className="subtitle-cart"> está en tu carrito</h3>
                            </div>
                        </div>
                        {cart.map((product) => (
                            <CartProduct key={product.id} product={product} />
                        ))}
                        <CartTotal></CartTotal>    
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
