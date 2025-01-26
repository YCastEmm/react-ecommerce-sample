import { Link } from "react-router-dom";


const CompraConfirmada = () => {
    return (
        <div className="width-content compra-confirmada-container">
            <div>
                <img className="checkout-img" src="src/assets/checkout.webp" alt="" />
            </div>
            <div className="checkout-compra-text">
                <h1>Tu compra fue confirmada</h1>
                <h2>Estamos procesando tu pedido</h2>
                <img className="sent-image" src="../src\assets\sent.webp" alt=""/>
                <h3>Revisá tu correo electrónico para hacer el siguimiento del paquete.</h3>
                <Link to="/" className="back-home"><p>Volver al inicio</p></Link>
            </div>
        </div>
    )
}

export default CompraConfirmada