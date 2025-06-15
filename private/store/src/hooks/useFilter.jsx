import { useEffect, useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";


const useFilter = () =>{
    const { products } = useFetchProducts();
    const [filter, setFilter] = useState(null)
    const [ productosFiltrados, setProductosFiltrados ] = useState([])


    useEffect(() => {
        if (products) {
            if (!filter) {
                setProductosFiltrados(products); 

            } else {
                const filteredProducts = products.filter((product) => product.categoria == filter);
                setProductosFiltrados([...filteredProducts]);
            }
        }
    }, [products, filter]);

    const handleFilter = (event) =>{
        const selectedCategory = event.target.value;
        setFilter(selectedCategory)
    }
    
    const clearFilter = () => setFilter()


    return {productosFiltrados, handleFilter, clearFilter}
}

export default useFilter