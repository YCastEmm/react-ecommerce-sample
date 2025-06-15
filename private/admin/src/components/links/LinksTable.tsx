"use client"

import { useState } from "react";
import { LinkModal } from "./LinkDetails";
import { linksResponse, linkWithIdType } from "@/types/links.types";
import { FilePenLine } from "lucide-react";
import LinkEditor from "./LinkEditor";

type LinksTableProps = {
    response: linksResponse
}


export const LinksTable = ({response}: LinksTableProps) => {

    const [selectedLink, setSelectedLink] = useState<linkWithIdType | null>(null)
    const [editingLink, setEditingLink] = useState<linkWithIdType | null>(null)

    const handleSelectLink = (link : linkWithIdType) =>{
        setSelectedLink(link)
    }

    const handleEditLink = (e: React.MouseEvent, link: linkWithIdType) =>{
        e.stopPropagation()       
        setEditingLink(link)
        console.log(editingLink);
    }

    const onClose = () =>{
        setSelectedLink(null)
        setEditingLink(null)
    }
    
    // TODO: Modificar la respuesta del backen para que devuelva solo message y data, sin el user para no tener que acceder a dos niveles
    return (
        <>
        <table className="table-auto bg-white rounded-l-xl w-full">
            <thead className="py-4 border-b-2 border-gray-300">
                <tr>
                    <th className="py-4 text-gray-700 text-sm pl-4 text-left">Nombre</th>
                    <th className="py-4 text-gray-700 text-sm pl-4 text-left">Link</th>
                    <th className="py-4 text-gray-700 text-sm text-center">Unidad</th>
                    <th className="py-4 text-gray-700 text-sm text-center">Versión</th>
                    <th className="py-4 text-gray-700 text-sm text-center"><FilePenLine strokeWidth={1.5} className="m-auto" /></th>
                </tr>
            </thead>
            <tbody>

                {response ? response.data.productos.map((link, index) => 
                    <tr
                        key={index}
                        onClick={() =>handleSelectLink(link)}
                        className="hover:bg-purple-100 cursor-pointer">

                        <td className="py-4 px-2 text-gray-500 text-xs pl-4">{link.nombre}</td>
                        <td className="py-4 px-2 text-gray-500 text-xs pl-4">{link.link}</td>
                        <td className="py-4 px-2 text-gray-500 text-xs pl-4">{link.unidad}</td>
                        <td className="py-4 px-2 text-gray-500 text-xs pl-4">{link.version}</td>
                        <td className="py-1 px-2 text-center align-middle">
                            <button
                                onClick={(e) => handleEditLink(e, link)}
                                className="bg-blue-500 text-white w-full py-2 p-1 rounded-xl text-xs cursor-pointer hover:bg-blue-400">
                                Editar</button>
                        </td>
                    </tr>
                ) : ""}                        
            </tbody>
        </table>
        {selectedLink && <LinkModal link={selectedLink} onClose={onClose}/>}
        {editingLink && <LinkEditor link={editingLink} onClose={onClose}/>}
        </>
    );
};
