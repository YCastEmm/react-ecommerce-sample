"use client"

import { useAuthContext } from "@/contexts/useAuthContext";
import { linkWithIdType } from "@/types/links.types";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { usePutLink } from "@/app/(dashboard)/hooks/usePutLink";
import { X, Trash2 } from "lucide-react";
import { ConfirmationModal } from "../modals/ConfirmationModal";
import { useDelete } from "@/app/(dashboard)/hooks/useDeleteLink";
import { DeleteConfirmationModal } from "../modals/DeleteConfirmationModal";
import { useNotificationContext } from "@/contexts/useNotificationContext";


type LinkEditorProps = {
    link: linkWithIdType
    onClose: () => void
}

const LinkEditor = ({link, onClose} : LinkEditorProps)  => {

    const { auth } = useAuthContext();
    const token = auth?.token

    const {linkData, error, updateLink} = usePutLink()
    const {deleteError, deleteLinkById } = useDelete()
    const [formData, setFormData] = useState<linkWithIdType | null>(null)
    const { ShowNotificationPopUp } = useNotificationContext()
    const [showConfirm, setShowConfirm] = useState<boolean>(false)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false)

    const { register, handleSubmit, formState, reset } = useForm<linkWithIdType>({
        defaultValues: link
    });
    
    const { isDirty } = formState;

    const onSubmit = (data : linkWithIdType) => {
        setFormData(data)
        setShowConfirm(true)
    };
        
    useEffect(() => {
        if (deleteError) {
            ShowNotificationPopUp("ERROR", "No se pudo eliminar el link.")
        }
        if (error) {
            ShowNotificationPopUp("ERROR", "No se pudo actualizar el link.")
        }
    }, [error, linkData, ShowNotificationPopUp, deleteError]);

    return (
        <section className="fixed inset-0 bg-gray-700/50 flex items-center justify-center">
            <div className="m-auto w-200 bg-white px-14 pb-14 pt-8 rounded-2xl relative">
                <X
                    onClick={() => onClose()}
                    className="w-5 h-5 cursor-pointer absolute right-6 top-6"
                    color="gray" />
                <div className="flex justify-between items-center my-8">
                    <h2 className="text-gray-600 mt-3">Editar link</h2>
                    <button
                        onClick={()=> {
                            setFormData(link)
                            setShowDeleteConfirm(true)}}
                        className="bg-red-400 text-white p-3 rounded-2xl cursor-pointer hover:bg-red-300"><Trash2 /></button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full m-auto text-gray-600">
                    <input 
                        type="hidden" 
                        value={link._id}
                        {...register("_id")}
                    />
                    <label htmlFor="" className="mt-2 mb-2 pl-2 font-bold text-gray-500">
                        Nombre
                    </label>
                    <input
                        {...register("nombre")}
                        type="text"
                        placeholder="Manual de MD 96RL-MPXH"
                        className="bg-white h-10 rounded-xl pl-4 w-full border-1 border-zinc-200" />

                    <label htmlFor="" className="mt-8 mb-2 pl-2 font-bold text-gray-500">
                        Link
                    </label>
                    <input
                        {...register("link")}
                        type="text"
                        placeholder="https://manuales.x-28.com/..."
                        className="bg-white h-10 rounded-xl pl-4 w-full border-1 border-zinc-200" />

                    <div className="mt-8 mb-2 flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="" className="pl-2 mb-2 font-bold text-gray-500">
                                Unidad
                            </label>
                            <select
                                {...register("unidad")}
                                name=""
                                id=""
                                className="bg-white h-10 rounded-xl pl-4 w-50 border-1 border-zinc-200 j-dropdown cursor-pointer">
                                <option value="residencias">Residencias</option>
                                <option value="vehiculos">Vehículos</option>
                                <option value="camaras">Cámaras</option>
                            </select>
                        </div>
                        
                        <div className="flex flex-col">
                            <label htmlFor="" className="pl-2 mb-2 font-bold text-gray-500">
                                Tipo de material
                            </label>
                            <select
                                {...register("tipo")}
                                name=""
                                id=""
                                className="bg-white h-10 rounded-xl pl-4 w-70 border-1 border-zinc-200 j-dropdown cursor-pointer">
                                <option value="manuales">Manuales</option>
                                <option value="guias">Guías</option>
                                <option value="boletines">Boletines</option>
                                <option value="adicional">Material adicional | Herramientas</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="" className="mt-8 mb-2 pl-2 font-bold text-gray-500">
                        Grupo
                    </label>
                    <input
                        {...register("grupo")}
                        type="text"
                        placeholder="sensores"
                        className="bg-white h-10 rounded-xl pl-4 w-100 border-1 border-zinc-200" />

                    <div className="mt-8 mb-2 flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="" className="pl-2 mb-2 font-bold text-gray-500">
                                Versión
                            </label>
                            <input
                                {...register("version")}
                                type="number"
                                placeholder="1"
                                className="h-10 rounded-xl p-4 w-50 border-1 border-zinc-200" />                        
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className="pl-2 mb-2 font-bold text-gray-500">
                                Código de producto
                            </label>
                            <input
                                {...register("codigo_producto")}
                                type="text"
                                placeholder="P1113248"
                                className="bg-white h-10 rounded-xl pl-4 w-100 border-1 border-zinc-200" />
                        </div>
                    </div>

                    <div className="mt-16 flex justify-between">
                        <button
                            type="button"
                            onClick={() => reset(link)}
                            disabled={!isDirty}
                            className="border-1 border-gray-800 px-4 py-2 rounded-xl text-lg text-gray-800 bg-white cursor-pointer hover:bg-zinc-100 disabled:text-white disabled:border-0 disabled:bg-gray-300 disabled:cursor-not-allowed">Resetear</button>
                        <button
                            type="submit"
                            disabled={!isDirty}
                            className="bg-blue-700 px-4 py-2 rounded-xl text-lg text-white cursor-pointer hover:bg-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed">Guardar</button>
                    </div>
                </form>                

                {showDeleteConfirm && formData && 
                <DeleteConfirmationModal
                    updatedLink={formData}
                    onCancelDelete={() => setShowDeleteConfirm(false)} 
                    onConfirmDelete={() => {
                        deleteLinkById(token || "", formData._id)
                        ShowNotificationPopUp("SUCCESS", "Se eliminó correctamente el link.")
                        setShowDeleteConfirm(false)
                    }} />
                }

                {showConfirm && formData && 
                <ConfirmationModal
                    updatedLink={formData}
                    onCancel={() => setShowConfirm(false)} 
                    onConfirm={() => {
                        ShowNotificationPopUp("SUCCESS", "Se actualizó correctamente el link.")
                        updateLink(token || "", formData._id, formData)
                        setShowConfirm(false)
                    }} />
                }
            </div>
        </section>
    );
};

export default LinkEditor;
