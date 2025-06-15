import Image from "next/image";

export default function NoResults() {

    const isProd = process.env.NODE_ENV === "production";
    
    return (
        <div className="flex flex-col items-center justify-center py-10 mt-10">
            <div className="relative w-80 h-80 mb-7">
                <Image src={isProd ? "/m/admin-material-tecnico/no_found.png" : `/no_found.png`}  fill alt="No results" />
            </div>
            <p className="text-gray-500 text-2xl mb-5">No se encontraron resultados</p>
            <p className="text-gray-500 text-lg">Intenta ajustar tu búsqueda o filtro para encontrar lo que buscás</p>
        </div>
    );
}


