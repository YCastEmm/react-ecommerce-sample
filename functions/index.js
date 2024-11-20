const express = require("express");
const app = express();
const cors = require("cors")
const functions = require("firebase-functions");
const { log } = require("firebase-functions/logger");

const mongo = require("mongodb").MongoClient;

const conexion = "mongodb+srv://yaircastagnola:pepelepu@cluster-yc.c5xct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-YC";
const cliente = new mongo(conexion);

const dbname = "eCommerce_react";
const coleccion = "products";



app.use(cors({
    // origin: 'https://ecommerce-muestra.firebaseapp.com' 
}));

app.get("/api/products", async (req, res) => {

    try {
        // Conectar al cliente de MongoDB
        await cliente.connect();
        console.log(`Se estableció la conexión con ${dbname}`);

        // Acceder a la colección
        const productos = cliente.db(dbname).collection(coleccion);

        // Realizar la consulta para obtener todos los documentos
        // req.query contiene los parámetros de consulta pasados en la URL.
        // Ejemplo: si la URL es /api/products?categoria=zapatillas, req.query será { categoria: "zapatillas" }
        // MongoDB usa este objeto directamente como filtro en el método find(), devolviendo solo los documentos que 
        // coincidan con las claves y valores especificados en req.query.
        // Si no hay parámetros en la query, req.query es un objeto vacío ({}), por lo que find() devuelve todos los documentos.
        const query = await productos.find(req.query).toArray();

        return res.json(query);
    } catch (error) {
        return res.status(404).send(`No se pudo establecer la conexión con la base de datos ${dbname}: ${error}`);
    } finally {
        await cliente.close(); // Cerrar la conexión
    }
});


exports.app = functions.https.onRequest(app);


app.listen(5000, () =>{console.log("Server escuchando")})

