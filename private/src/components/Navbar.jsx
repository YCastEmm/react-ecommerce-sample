import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext"; 
import Fav from "./Fav";
import CartIcon from "../components/icons/CartIcon";
import UserIcon from "../components/icons/UserIcon";


const Navbar = () => {
    let { cart } = useCartContext();

    return (
        <nav className="nav-header">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalogo" className={({ isActive }) => (isActive ? "active" : "")}>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className={({ isActive }) => (isActive ? "active" : "")}>
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
                        Contacto
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li className="cart-btn">
                    <NavLink to="/carrito" className={({ isActive }) => (isActive ? "active" : "")}>
                        <CartIcon></CartIcon>
                    </NavLink>
                    {cart.length > 0 ? <span className="cart-icon">{cart.length}</span> : ""}
                </li>
                <li>
                    <Fav></Fav>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                        <UserIcon></UserIcon>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
