import express from "express";
import { productsController } from "../controllers/products.js";
import { validatorCreateProduct, validatorGetProductById } from "../validators/productValidator.js";

export const router = express.Router();

// Obtener todos los productos
router.get("/", productsController.getAllProducts);

// Obtener un producto por ID
router.get("/:id", validatorGetProductById, productsController.getProductById);

// Crear un nuevo producto
router.post("/", validatorCreateProduct, productsController.createProduct);

// Actualizar un producto
router.put("/:id", validatorGetProductById, validatorCreateProduct, productsController.updateProduct);

// Eliminar un producto
router.delete("/:id", validatorGetProductById, productsController.deleteProduct);
