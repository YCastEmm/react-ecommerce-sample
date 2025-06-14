import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./config/db.js";
import { router as productsRouter } from "./routes/products.js";
import { router as authRouter } from "./routes/auth.js";

config(); // Cargar variables de entorno

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/uploads", express.static("uploads"));

// Conectar a la base de datos
dbConnect();

// Iniciar servidor en puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
