"use client";

import { userLoginCredentialsType } from "@/types/auth.types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePostLogin } from "./(dashboard)/hooks/usePostLogin";
import { CircleAlert } from "lucide-react";
import { useAuthContext } from "@/contexts/useAuthContext";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const { login, isAuthenticated } = useAuthContext();
    const router = useRouter();

    const userInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>();
    const { userData, loading, error, fetchLogin } = usePostLogin();

    const isProd = process.env.NODE_ENV === "production";

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/links");
        }
    }, [isAuthenticated, router]);

    const [showPassword, setShowPassword] = useState(false);
    const [inputErrors, setInputErrors] = useState<{ userName?: string; password?: string }>({});

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        const userName = userInput.current?.value.trim() ?? "";
        const password = passwordInput.current?.value.trim() ?? "";

        const errors: { userName?: string; password?: string } = {};
        if (!userName) errors.userName = "Este campo es obligatorio";
        if (!password) errors.password = "Este campo es obligatorio";

        setInputErrors(errors);

        if (Object.keys(errors).length > 0) return;

        setErrorMessage(null);
        const userLogin: userLoginCredentialsType = { userName, password };
        await fetchLogin(userLogin);
    };

    useEffect(() => {
        if (userData) {
            login(userData);
        }
        if (error) {
            console.log(error.errorMessage);
            setErrorMessage(error.errorMessage);
        }
    }, [error, userData, isAuthenticated, login]);

    if (isAuthenticated) return null;

    return (
        <div className="flex-1 grid grid-cols-8">
            <main className="flex flex-1 bg-gray-200 col-span-5">
                <section className="flex flex-col flex-1 justify-center items-center">
                    <div className="mb-8">
                        <h2 className="mb-2 text-gray-700">Administrador de Material Técnico</h2>
                        <h3 className="text-gray-700">¡Bienvenido!</h3>
                    </div>
                    <div className="bg-white px-10 py-12 rounded-3xl">
                        <h2 className="mb-12 text-gray-700">Iniciar sesión</h2>

                        <form className="flex flex-col w-100">
                            <label htmlFor="campo1" className="mb-3 text-lg">
                                Usuario
                            </label>
                            <input type="text" id="campo1" ref={userInput} className="bg-gray-100 border-1 border-gray-200 rounded-lg mb-8 px-3 py-1" />
                            {inputErrors.userName && (
                                <div className=" text-red-500 flex items-center gap-2 text-sm mb-2">
                                    <CircleAlert strokeWidth={1.2} size={18} />
                                    {inputErrors.userName}
                                </div>
                            )}

                            <label htmlFor="campo2" className="mb-3 text-lg">
                                Contraseña
                            </label>
                            <div className="relative mb-6 group">
                                <input type={showPassword ? "text" : "password"} id="campo2" ref={passwordInput} className="bg-gray-100 border-1 border-gray-200 rounded-lg px-3 py-1 pr-10 w-full" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 cursor-pointer" tabIndex={-1}>
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {inputErrors.userName && (
                                <div className=" text-red-500 flex items-center gap-2 text-sm">
                                    <CircleAlert strokeWidth={1.2} size={18} />
                                    {inputErrors.userName}
                                </div>
                            )}

                            <div className="h-10">
                                {errorMessage && (
                                    <div className=" text-red-500 flex items-center gap-2 text-sm">
                                        <CircleAlert strokeWidth={1.2} size={18} />
                                        {errorMessage}
                                    </div>
                                )}
                            </div>

                            <button onClick={handleSubmit} className="bg-blue-700 w-full py-3 rounded-xl text-xl text-white cursor-pointer hover:bg-indigo-500">
                                {loading ? <Spinner /> : "Ingresar"}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="bg-blue-700 flex flex-col items-center col-span-3 p-4 h-full">
                <div className="flex-1 flex items-center justify-center w-full">
                    <Image src={isProd ? "/m/admin-material-tecnico/logo_blanco.png" : `/logo_blanco.png`} width="128" height="64" alt="Logo" />
                </div>
                <p className="text-white mt-auto text-sm text-center">© X-28 Alarmas — Todos los derechos reservados</p>
            </footer>
        </div>
    );
}
