import express from "express";
import { productsController } from "../controllers/products.js";
import { validatorCreateProduct, validatorGetProductById } from "../validators/productValidator.js";
import { upload } from "../middlewares/upload.js";
import { authMiddleware } from "../middlewares/session.js"
import { checkRole } from "../middlewares/role.js"


export const router = express.Router();

// Obtener todos los productos
router.get("/", productsController.getAllProducts);

// Obtener un producto por ID
router.get("/:id", authMiddleware, checkRole("admin"), validatorGetProductById, productsController.getProductById);

// Crear un producto con imagen
router.post("/", authMiddleware, checkRole("admin"), upload.single("imagen"), validatorCreateProduct, productsController.createProduct);

// Actualizar un producto
router.put("/:id",  authMiddleware, checkRole("admin"), validatorGetProductById, validatorCreateProduct, productsController.updateProduct);

// Eliminar un producto
router.delete("/:id",  authMiddleware, checkRole("admin"), validatorGetProductById, productsController.deleteProduct);
