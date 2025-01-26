import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Usa useNavigate aquí
import useFilter from "../hooks/useFilter";
import CardProduct from "../components/CardProduct";
import CuotasSinInteres from "../components/FreeShipping";
import bannerlg from "../assets/runner.webp";

const Catalog = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Usa useNavigate aquí

    // Obtener el valor del filtro desde los parámetros de la URL (query string)
    const queryFilter = new URLSearchParams(location.search).get("filter") || ""; 
    const [selectedFilter, setSelectedFilter] = useState(queryFilter);
    const { handleFilter, productosFiltrados } = useFilter();

    // Actualizar el filtro cuando cambie el estado o la URL
    useEffect(() => {
        handleFilter({ target: { value: selectedFilter } });
    }, [selectedFilter, handleFilter]);

    useEffect(() => {
        // Sincronizar la URL con el filtro seleccionado
        if (selectedFilter) {
            navigate(`?filter=${selectedFilter}`); // Usamos navigate en vez de history.push
        } else {
            navigate("?"); // Quitar el filtro de la URL si no está seleccionado
        }
    }, [selectedFilter, navigate]);

    const handleSelectFilter = (value) => {
        setSelectedFilter(value); // Cambiar el filtro
    };

    return (
        <div>
            <div>
                <img className="banner" src={bannerlg} alt="Banner"></img>
            </div>
            <CuotasSinInteres />
            <div className="width-content">
                <div className="filter-container">
                    <div
                        className={`filter-option ${selectedFilter === "" ? "selected" : ""}`}
                        onClick={() => handleSelectFilter("")}
                    >
                        Todos los productos
                    </div>
                    <div
                        className={`filter-option ${selectedFilter === "zapatillas" ? "selected" : ""}`}
                        onClick={() => handleSelectFilter("zapatillas")}
                    >
                        Calzado
                    </div>
                    <div
                        className={`filter-option ${selectedFilter === "indumentaria" ? "selected" : ""}`}
                        onClick={() => handleSelectFilter("indumentaria")}
                    >
                        Indumentaria
                    </div>
                    <div
                        className={`filter-option ${selectedFilter === "tecnologia" ? "selected" : ""}`}
                        onClick={() => handleSelectFilter("tecnologia")}
                    >
                        Tecnología
                    </div>
                    <div
                        className={`filter-option ${selectedFilter === "accesorios" ? "selected" : ""}`}
                        onClick={() => handleSelectFilter("accesorios")}
                    >
                        Accesorios
                    </div>
                </div>

                <div className="product-card-container">
                    {productosFiltrados.map((producto) => (
                        <CardProduct producto={producto} key={producto._id}></CardProduct>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
