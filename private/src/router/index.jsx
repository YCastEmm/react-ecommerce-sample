import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic"
import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import AboutUs from "../pages/About_us";
import Contact from "../pages/Contact";



const router = createBrowserRouter([{
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    // El atributo 'path' especifica la URL relativa de la ruta.
                    // En este caso, index true indica que es a la ruta raíz de la aplicación, "./about" se refiere a la ruta "/about" y "./blog" se refiere a la ruta "/blog".
                    index: true, // Indica que este es el componente por defecto cuando se accede a esta ruta
                    element: <Home></Home>
                },
                {
                    path: "/nosotros", // Ruta para la página Acerca de
                    element: <AboutUs></AboutUs>, // Componente About para esta ruta
                },
                {
                    path: "/carrito", // Ruta para la página de Blog
                    element: <Cart></Cart>, // Componente Blog para esta ruta
                },
                {
                    path: "catalogo", // Ruta para las publicaciones individuales en el Blog
                    element: <Catalog></Catalog>, // Componente Posts para esta ruta
                },    
                {
                    path: "/contacto", // Ruta para la página Acerca de
                    element: <Contact></Contact>, // Componente About para esta ruta
                },
            ]
        }
    ]

}]);


export default router