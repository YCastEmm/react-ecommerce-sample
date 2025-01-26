import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCartContext } from "../context/CartContext";
import CompraConfirmada from "../components/checkout/CompraConfirmada";
import StepDatos from "../components/checkout/StepDatos";
import StepPago from "../components/checkout/StepPago";
import StepConfirmacion from "../components/checkout/StepConfirmacion";



const Checkout = () => {

    const { setCart } = useCartContext();

    let navigate = useNavigate()

    const [compraConfirmada, setCompraConfirmada] = useState(false)

    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {       
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleConfirmarCompra = () =>{
        setTimeout(() => {
            setCart([])
            setCompraConfirmada(true)
        }, 1600);
    }


    return (
        
        !compraConfirmada   ? 
                                <div className="checkout-container">
                                    <h1 className="checkout-title">Ya casi terminamos 🛫</h1>
                                    <div className="steps-indicator">
                                        <span className={`step ${currentStep >= 1 ? "active" : ""}`}>1. Datos personales</span>
                                        <span className={`step ${currentStep >= 2 ? "active" : ""}`}>2. Pago</span>
                                        <span className={`step ${currentStep === 3 ? "active" : ""}`}>3. Confirmación</span>
                                    </div>
                                    <div className="step-content">
                                        {currentStep === 1 && <StepDatos />}
                                        {currentStep === 2 && <StepPago />}
                                        {currentStep === 3 && <StepConfirmacion />}
                                    </div>
                                    <div className="navigation-buttons">
                                        <button onClick={currentStep === 1 ? () => navigate("/carrito") : handleBack} className="btn-cart-total continuar-comprando">Atrás</button>
                                        <button className="btn-cart-total checkout" onClick={currentStep < 3 ? handleNext : handleConfirmarCompra}> {currentStep < 3 ? "Siguiente" : "Finalizar Compra"}</button>
                                    </div>
                                </div>
                                
                            :   <CompraConfirmada></CompraConfirmada>
            

    );
};

export default Checkout;
