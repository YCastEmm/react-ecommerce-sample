import mongoose from "mongoose";
import { config } from "dotenv";
import fs from "fs";
import { ProductModel } from "./models/product.js";
import { UserModel } from "./models/users.js";
import { encryptPass } from "./utils/handlePassword.js";

// Cargar variables de entorno
config();
const uri = process.env.DB_URI;

const runSeeder = async () => {
    try {
        await mongoose.connect(uri);
        console.log("📦 Conectado a MongoDB");
        console.log(uri);
        

        // Cargar productos
        const rawProducts = fs.readFileSync("./data/products.json");
        const products = JSON.parse(rawProducts);
        await ProductModel.deleteMany({});
        await ProductModel.insertMany(products);
        console.log(`✅ Se cargaron ${products.length} productos`);

        // Cargar usuarios
        const rawUsers = fs.readFileSync("./data/users.json");
        const users = JSON.parse(rawUsers);
        await UserModel.deleteMany({});
        await UserModel.insertMany(users);
        console.log(`✅ Se cargaron ${users.length} usuarios`);

        process.exit();
    } catch (error) {
        console.error("❌ Error al cargar datos:", error);
        process.exit(1);
    }
};

runSeeder();
