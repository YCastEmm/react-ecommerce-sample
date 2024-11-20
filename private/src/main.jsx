import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/catalogo.css";
import "./css/cart.css";


import router from "./router/index";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./context/CartContext";
import FavProvider from "./context/FavContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FavProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </FavProvider>
    </StrictMode>
);
