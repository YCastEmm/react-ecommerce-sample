import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./config/db.js";
import { router as productsRouter } from "./routes/products.js";
import functions from "firebase-functions";

config(); // Carga las variables de entorno desde .env

const app = express(); 

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/products", productsRouter);
app.use("/auth", productsRouter);

// Conexión a la bdd
dbConnect();


// Exportar como función de Firebase
export const api = functions.https.onRequest(app);
