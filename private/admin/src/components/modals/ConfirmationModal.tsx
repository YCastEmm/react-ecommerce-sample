import { linkWithIdType } from "@/types/links.types"
import { capitalizeWord } from "@/utils/capitalizeWord"


type ConfirmationModalProps = {
    updatedLink: linkWithIdType
    onConfirm: () => void
    onCancel: () => void
}


export const ConfirmationModal = ({updatedLink, onCancel, onConfirm} : ConfirmationModalProps) => { 
        
    return   <section className="fixed inset-0 bg-gray-700/70 flex items-center justify-center">
                <div className="p-14 bg-white rounded-2xl relative shadow-2xl color">
                    <h3>Esta acción modificará el link con los datos detallados.</h3>   
                    <h3 className="mt-3"><b>¿Deseás continuar?</b></h3>

                    <table className="mt-8 table-auto bg-white text-center">
                        <thead className="py-4 border-b-2 border-gray-300">
                            <tr>
                                <th className="py-4 px-6 text-gray-700 text-xl">Nombre</th>
                                <th className="py-4 px-6 text-gray-700 text-xl">Link</th>
                                <th className="py-4 px-6 text-gray-700 text-xl">Unidad</th>
                                <th className="py-4 px-6 text-gray-700 text-xl">Tipo</th>
                                <th className="py-4 px-6 text-gray-700 text-xl">Grupo</th>
                                <th className="py-4 px-6 text-gray-700 text-xl">Versión</th>
                                <th className="py-4 px-6 text-gray-700 text-xl">Código de producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4 px-2 text-gray-500 text-lg">{updatedLink.nombre}</td>
                                <td className="py-4 px-2 text-gray-500 text-lg hover:text-blue-500"><a href={updatedLink.link} target="_blank">{updatedLink.link}</a></td>
                                <td className="py-4 px-2 text-gray-500 text-lg">{capitalizeWord(updatedLink.unidad)}</td>
                                <td className="py-4 px-2 text-gray-500 text-lg">{capitalizeWord(updatedLink.tipo)}</td>
                                <td className="py-4 px-2 text-gray-500 text-lg">{updatedLink.grupo && capitalizeWord(updatedLink.grupo)}</td>
                                <td className="py-4 px-2 text-gray-500 text-lg">{updatedLink.version}</td>
                                <td className="py-4 px-2 text-gray-500 text-lg">{updatedLink.codigo_producto && updatedLink.codigo_producto.toUpperCase()}</td>                            
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-16 flex justify-between">
                        <button
                            onClick={() => onCancel()}
                            type="reset"
                            className="border-1 border-gray-700 px-4 py-2 rounded-xl text-lg text-gray-800 bg-white cursor-pointer hover:bg-zinc-100">Cancelar</button>
                        <button
                            onClick={() => onConfirm()}
                            type="submit"
                            className="bg-blue-700 px-4 py-2 rounded-xl text-lg text-white cursor-pointer hover:bg-indigo-500">Guardar</button>
                    </div>               
                </div>
            </section>

}