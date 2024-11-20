import { useEffect, useState } from "react";

let useFetchProducts = () => {
    let [products, setProducts] = useState([]);
    let [zapatillas, setZapatillas] = useState([]);
    let [indumentaria, setIndumentaria] = useState([]);
    let [accesorios, setAccesorios] = useState([]);
    let [tecnologia, setTecnologia] = useState([]);





    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response = await fetch('http://127.0.0.1:5000/api/products');
                let data = await response.json();
                setProducts(data);

                // Filtro los productos por categorias y los guardo en cada variable                
                setZapatillas(data.filter((producto) => producto.categoria === "zapatillas"))
                setIndumentaria(data.filter((producto) => producto.categoria === "indumentaria"))
                setAccesorios(data.filter((producto) => producto.categoria === "accesorios"))
                setTecnologia(data.filter((producto) => producto.categoria === "tecnologia"))

            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchProducts();
    }, []); // Asegúrate de pasar un arreglo vacío como segundo argumento para que useEffect se ejecute solo una vez al montar el componente

    return { products, zapatillas, indumentaria, accesorios, tecnologia };
};

export default useFetchProducts;
