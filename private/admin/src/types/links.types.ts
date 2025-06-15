import { userType } from "./user.types"

enum unidad {
    residencias = "residencias",
    vehiculos = "vehiculos",
    camaras = "camaras"
}


enum tipo {
    manuales = "manuales",
    guias = "guias",
    boletines = "boletines",
    adicional = "adicional"
}

export type linkType = {
    nombre: string,
    link: string,
    unidad: unidad,
    grupo: string | null,
    tipo: tipo,
    version: string,
    codigo_producto: string | null,
}

export type linkWithIdType = linkType & {
    _id: string,
}

export type linksResponse = {
    message: string;
    data: {
            page: number,
            limit: number,
            totalDocs: number,
            totalPages: number,
            productos: linkWithIdType[];
        },
    user: userType    
};

// export type linksResponse = {
//     message: string;
//     data: {
//         user: userType & { _id: string };
//         data: {
//             page: number,
//             limit: number,
//             totalDocs: number,
//             totalPages: number,
//             productos: linkWithIdType[];
//         }
//     };
// };