import { linkWithIdType } from "@/types/links.types";
import { capitalizeWord } from "@/utils/capitalizeWord";
import { X } from "lucide-react";

type linkModalProps = {
    link: linkWithIdType,
    onClose: () => void
}

export const LinkModal = ({link, onClose}: linkModalProps) => {

    return (
        <div className="fixed inset-0 bg-gray-700/50 flex items-center justify-center">
            <div className="p-14 bg-white rounded-2xl relative shadow-2xl color">
                <X
                    onClick={() => onClose()}
                    className="w-5 h-5 cursor-pointer absolute right-6 top-6 hover: text-blue-600"
                    color="gray" />
                <table className="table-auto bg-white text-center">
                    <thead className="py-4 border-b-2 border-gray-300">
                        <tr>
                            <th className="py-4 px-6 text-gray-700 text-sm">id</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Nombre</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Link</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Unidad</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Tipo</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Grupo</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Versión</th>
                            <th className="py-4 px-6 text-gray-700 text-sm">Código de producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4 px-2 text-gray-500 text-xs">{link._id}</td>
                            <td className="py-4 px-2 text-gray-500 text-xs">{link.nombre}</td>
                            <td className="py-4 px-2 text-gray-500 text-xs hover:text-blue-500"><a href={link.link} target="_blank">{link.link}</a></td>
                            <td className="py-4 px-2 text-gray-500 text-xs">{capitalizeWord(link.unidad)}</td>
                            <td className="py-4 px-2 text-gray-500 text-xs">{capitalizeWord(link.tipo)}</td>
                            <td className="py-4 px-2 text-gray-500 text-xs">{link.grupo && capitalizeWord(link.grupo)}</td>
                            <td className="py-4 px-2 text-gray-500 text-xs">{link.version}</td>
                            <td className="py-4 px-2 text-gray-500 text-xs">{link.codigo_producto && link.codigo_producto.toUpperCase()}</td>                            
                        </tr>
                    </tbody>
                </table>
        </div>
        </div>
    );
};
