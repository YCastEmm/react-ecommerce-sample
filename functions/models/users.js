import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false 
        },
        role: {
            type: String,
            enum: ["admin", "guest", "user"],
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const UserModel = mongoose.model("users", UserSchema);
