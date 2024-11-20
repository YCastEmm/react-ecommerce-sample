import { useState } from "react";
import useFilter from "../hooks/useFilter";
import CardProduct from "../components/CardProduct";
import CuotasSinInteres from "../components/FreeShipping";
import bannerlg from "../assets/runner.webp"

const Catalog = () => {
    const [selectedFilter, setSelectedFilter] = useState(""); // Estado para el filtro seleccionado
    const { handleFilter, productosFiltrados } = useFilter();

    const handleSelectFilter = (value) => {
        setSelectedFilter(value); // Establecer el filtro seleccionado
        handleFilter({ target: { value } }); // Aplicar el filtro
    };

    return (
        <div>
            <div>
                <img className="banner" src={bannerlg} alt="Banner"></img>
            </div>
            <CuotasSinInteres></CuotasSinInteres>
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
