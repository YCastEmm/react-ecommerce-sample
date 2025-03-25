import { check, param } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

// Validación para crear un producto
export const validatorCreateProduct = [check("nombre").exists().notEmpty(), check("categoria").exists().notEmpty(), check("descripcion").exists().notEmpty(), check("precio").exists().isNumeric().toFloat(), check("urlImagen").exists().isURL(), check("talles").isArray({ min: 1 }), (req, res, next) => validateResult(req, res, next)];

// Validación para ID (get, delete, update)
export const validatorGetProductById = [param("id").exists().isMongoId(), (req, res, next) => validateResult(req, res, next)];
