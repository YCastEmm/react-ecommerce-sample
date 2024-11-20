import { useState, useEffect } from "react";

const CuotasSinInteres = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const messages = [
        "⚡ ¡Pagá en hasta 3 cuotas sin interés en compras superiores a $100.000! ⚡",
        "📦 ¡Si sumás $70.000 en compras, el envío lo pagamos nosotros! 🚍",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="envios-gratis">
            <div className="width-content">
                <div className="shipping-banner">
                    <p className="rotating-text">{messages[currentIndex]}</p>
                </div>
            </div>
        </div>
    );
};

export default CuotasSinInteres;
