import express from "express";
import { usersController } from "../controllers/auth.js";

export const router = express.Router();

// Obtener todos los productos
router.post("/login", usersController.loginUser);


// Obtener todos los productos
router.post("/register", usersController.registerUser);
