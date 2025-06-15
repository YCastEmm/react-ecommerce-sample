import express from "express";
import { authController } from "../controllers/auth.js";
import { authMiddleware } from "../middlewares/session.js"
import { checkRole } from "../middlewares/role.js"

export const router = express.Router();

// Loguear un usuario
router.post("/login", authController.loginUser);


// Registrar un usuario
router.post("/register", authController.registerUser);
