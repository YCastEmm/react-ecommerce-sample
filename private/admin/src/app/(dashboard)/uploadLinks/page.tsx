"use client"

import { useAuthContext } from "@/contexts/useAuthContext";
import { linkType } from "@/types/links.types";
import { useForm } from "react-hook-form";
import { usePostLink } from "../hooks/usePostLink";
import { useNotificationContext } from "@/contexts/useNotificationContext";
import { Spinner } from "@/components/Spinner";

const UploadLinksPage = () => {

    const { auth } = useAuthContext();        
    const { ShowNotificationPopUp } = useNotificationContext()
    const {loading, createLink} = usePostLink()
    const { register, handleSubmit, reset } = useForm<linkType>();
    
    const token = auth?.token


    const onSubmit = async (data : linkType) => {        
        try {
            await createLink(token || "null", data)
            reset()
            ShowNotificationPopUp("SUCCESS", "Se creó correctamente el link.")
        } catch {
            ShowNotificationPopUp("ERROR", "No se pudo procesar el contenido.")
        }
    };

    return (
        <section className="">
            <p className="text-sm text-gray-500 mb-4">Administrador de material técnico | Dashboard | Cargar links</p>

            <div className="m-auto w-full bg-white px-14 pb-13 pt-8 rounded-2xl">
                <h2 className="text-gray-500 mt-2 mb-8">Cargar un link</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-13 w-full m-auto text-gray-600">
                    <div className="flex flex-col">
                        <label htmlFor="" className="pl-2 mb-3">
                            Nombre
                        </label>
                        <input
                            {...register("nombre")}
                            type="text"
                            placeholder="Manual de MD 96RL-MPXH"
                            className="h-10 rounded-xl pl-4 w-full border-1 border-zinc-200" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="pl-2 mb-3">
                            Link
                        </label>
                        <input
                            {...register("link")}
                            type="text"
                            placeholder="https://manuales.x-28.com/..."
                            className="h-10 rounded-xl pl-4 w-full border-1 border-zinc-200" />
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <label htmlFor="" className="pl-2 mb-3">
                                Unidad
                            </label>
                            <select
                                {...register("unidad")}
                                name=""
                                id=""
                                className="h-10 rounded-xl px-4 w-50 border-1 border-zinc-200 j-dropdown cursor-pointer">
                                <option value="residencias">Residencias</option>
                                <option value="vehiculos">Vehículos</option>
                                <option value="camaras">Cámaras</option>
                            </select>
                        </div>
                        <div className="flex flex-col ml-8">
                            <label htmlFor="" className="pl-2 mb-3">
                            Grupo
                            </label>
                            <input
                                {...register("grupo")}
                                type="text"
                                placeholder="sensores"
                                className="h-10 rounded-xl pl-4 w-100 border-1 border-zinc-200" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="pl-2 mb-3">
                                Tipo de material
                        </label>
                        <select
                            {...register("tipo")}
                            name=""
                            id=""
                            className="h-10 rounded-xl px-4 w-80 border-1 border-zinc-200 j-dropdown cursor-pointer">
                            <option value="manuales">Manuales</option>
                            <option value="guias">Guías</option>
                            <option value="boletines">Boletines</option>
                            <option value="adicional">Material adicional | Herramientas</option>
                        </select>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col ">
                            <label htmlFor="" className="pl-2 mb-3">
                                Versión
                            </label>
                            <input
                                {...register("version")}
                                type="number"
                                placeholder="1"
                                className="h-10 rounded-xl p-4 w-50 border-1 border-zinc-200" />                        
                        </div>
                        <div className="flex flex-col ml-8">
                            <label htmlFor="" className="pl-2 mb-3">
                                Código de producto
                            </label>
                            <input
                                {...register("codigo_producto")}
                                type="text"
                                placeholder="P1113248"
                                className="h-10 rounded-xl pl-4 w-100 border-1 border-zinc-200" />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="reset"
                            className="border-1 border-zinc-400 px-6 py-2 rounded-xl text-lg text-zinc-600 bg-white cursor-pointer hover:bg-zinc-100">
                                Resetear
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-700 w-30 py-2 rounded-xl text-lg text-white cursor-pointer hover:bg-indigo-500">
                                {
                                    loading ? <Spinner /> : "Ingresar"
                                }
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UploadLinksPage;
