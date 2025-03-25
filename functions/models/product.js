import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        categoria: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            required: true,
        },
        urlImagen: {
            type: String,
            required: true,
        },
        talles: {
            type: [String],
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const ProductModel = mongoose.model("products", ProductSchema);
