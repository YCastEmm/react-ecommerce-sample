import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./MenuHamburguesa"; // Importa el componente de menú hamburguesa
import logo from "../assets/logo-lg.webp";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detecta el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        // Verifica el tamaño al cargar la página y cada vez que cambie el tamaño de la ventana
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-container width-content">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="Indigo Logo" />
                    </a>
                </div>
                {/* Si es un dispositivo móvil (menor a 992px), se muestra el menú hamburguesa */}
                {isMobile ? <HamburgerMenu /> : <Navbar />}
            </div>
        </header>
    );
};

export default Header;
