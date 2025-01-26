import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const CartTotal = () =>{
    
    const {cart, setCart } = useCartContext()
    
    const costoTotal = () =>{
        let subTotal = 0;
        cart.forEach(producto => {
            subTotal += producto.precio
        });
        return subTotal
    }
    
    return    (

        <div className="cart-total-container">
            <div className="cart-total-monto">
                <div><h3>Total</h3></div>
                <div><h3>${costoTotal()}</h3></div>
            </div>

            <div className="cart-total-btns">
                <div>
                    <Link to="/catalogo"><button className="btn-cart-total continuar-comprando">Continuar comprando</button></Link>
                </div>
                <div>
                <Link to="/checkout"><button className="btn-cart-total checkout">Finalizar compra</button></Link>
                </div>
            </div>
        </div>


    )
}

export default CartTotal