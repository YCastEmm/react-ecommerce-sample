import { useCartContext } from "../../context/CartContext";


const StepConfirmacion = () =>{

    const { cart, setCart } = useCartContext();
    
    const calcularTotal = () =>{
        let total = 0
        cart.forEach(element => {
            total += element.precio
        });
        
        return total
    }

    return (
                <div>
                    <h2 className="checkout-subtitle">Confirmación</h2>
                    <p>¡Todo listo! Revisá tu pedido antes de finalizar la compra.</p>
                    {
                        cart.map(product => (
                            <div className="product-checkout shadow" key={product.idCart}>
                                    <div className="card-checkout-img"><img src={product.urlImagen} alt="" /></div>
                                    <div className="card-checkout-name">{product.nombre}</div>
                                    <div className="card-checkout-size">Talle: {product.size}</div>
                                    <div className="card-checkout-price"><b>${product.precio}</b></div>

                            </div>
                                
                        ))
                    }

                    {calcularTotal() < 70000 ? 
                                                <div className="checkout-total-container">
                                                    <div className="checkout-shipping-container">
                                                        <div>Envío:</div>
                                                        <div>$8000</div>
                                                    </div>
                                                    <div className="checkout-price-container">
                                                        <div>Total:</div>
                                                        <div>$ {(calcularTotal() + 8000).toLocaleString("es-AR")}</div>
                                                    </div>
                                                </div>
                    
                                            :
                                                <div className="checkout-total-container">
                                                    <div className="checkout-shipping-container">
                                                        <div>Envío:</div>
                                                        <div className="checkout-free-shipping">Gratis</div>
                                                    </div>
                                                    <div className="checkout-price-container">
                                                        <div>Total:</div>
                                                        <div>$ {(calcularTotal()).toLocaleString("es-AR")}</div>
                                                    </div>
                                                </div>
                    }
                </div>
    )
}

export default StepConfirmacion