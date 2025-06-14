import { ProductModel } from "../models/product.js";
import { matchedData } from "express-validator";
import { handleResponse } from "../utils/handleResponse.js";
import { handleError } from "../utils/handleError.js";

// Obtener todos los productos (con filtros opcionales)
const getAllProducts = async (req, res) => {
    try {
        const filtros = req.query;
        const products = await ProductModel.find(filtros);
        handleResponse(res, 200, "Productos obtenidos correctamente", products);

    } catch (error) {
        handleError(res, "Error al obtener los productos");
    }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const product = await ProductModel.findById(id);
        if (!product) return handleError(res, "Producto no encontrado", 404);
        handleResponse(res, 200, "Producto obtenido correctamente", product);

    } catch (error) {
        handleError(res, "Error al obtener el producto");
    }
};

// Crear un producto
const createProduct = async (req, res) => {
    try {
        const body = matchedData(req);

        if (req.file) {
            const filename = req.file.filename;
            const baseUrl = `${req.protocol}://${req.get("host")}`;
            body.urlImagen = `${baseUrl}/uploads/${filename}`;
        }

        const newProduct = await ProductModel.create(body);
        handleResponse(res, 201, "Producto creado correctamente", newProduct);
    } catch (error) {
        console.error(error);
        handleError(res, "Error al crear el producto");
    }
};



// Actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const { id, ...data } = matchedData(req);
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, data, {
            new: true,
        });
        if (!updatedProduct) return handleError(res, "Producto no encontrado", 404);
        handleResponse(res, 200, "Producto actualizado correctamente", updatedProduct);

    } catch (error) {
        handleError(res, "Error al actualizar el producto");
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const deleted = await ProductModel.findByIdAndDelete(id);
        if (!deleted) return handleError(res, "Producto no encontrado", 404);
        handleResponse(res, 200, "Producto eliminado correctamente", deleted);

    } catch (error) {
        handleError(res, "Error al eliminar el producto");
    }
};


export const productsController = {
                                getAllProducts, 
                                getProductById, 
                                createProduct, 
                                updateProduct, 
                                deleteProduct
                            }