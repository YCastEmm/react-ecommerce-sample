import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Fav from "./Fav";
import CartIcon from "../components/icons/CartIcon";
import UserIcon from "../components/icons/UserIcon";

const HamburgerMenu = () => {
    const { cart } = useCartContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getNavLinkClass = ({ isActive }) => (isActive ? "active" : "");

    return (
        <nav className="nav-header">
            {/* Botón de menú hamburguesa */}
             {/* Íconos de carrito, favoritos y usuario */}
             <ul className="nav-icons">
                    <li className="cart-btn">
                        <NavLink to="/carrito" className={getNavLinkClass}>
                            <CartIcon />
                        </NavLink>
                        {cart.length > 0 && <span className="cart-icon">{cart.length}</span>}
                    </li>
                    <li>
                        <Fav />
                    </li>
                    <li>
                        <NavLink to="/login" className={getNavLinkClass}>
                            <UserIcon />
                        </NavLink>
                    </li>
                </ul>
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                &#9776;
            </button>

            {/* Menú de navegación (se muestra cuando isMenuOpen es true) */}
            <div className={`menu ${isMenuOpen ? "open" : ""} shadow`}>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={getNavLinkClass}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalogo" className={getNavLinkClass}>
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={getNavLinkClass}>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={getNavLinkClass}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>

               
            </div>
        </nav>
    );
};

export default HamburgerMenu;
