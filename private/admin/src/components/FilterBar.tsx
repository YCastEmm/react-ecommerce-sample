import { ListFilter, RotateCcw } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const unidades = [
    { nombre: "Residencias", valor: "residencias" },
    { nombre: "Vehículos", valor: "vehiculos" },
    { nombre: "Cámaras", valor: "camaras" },
];

const tipos = [
    { nombre: "Manuales", valor: "manuales" },
    { nombre: "Guías", valor: "guias" },
    { nombre: "Material adicional", valor: "adicional" },
    { nombre: "Boletines", valor: "boletines" }
]

type FilterBarProps = {
    setUnidad: (value: string) => void;
    setTipo: (value: string) => void;
    setPage: (value: number) => void
    unidad: string;
    tipo: string;
};

export const FilterBar = ({ setUnidad, setTipo, unidad, tipo, setPage }: FilterBarProps) => {
    return (
        <div className="w-85 flex justify-between">
            <Listbox
                value={unidad}
                onChange={(value)=>{
                    setUnidad(value)
                    setPage(1)
                }}>
                <ListboxButton className="bg-white py-2 px-3 text-sm w-35 rounded-lg flex items-center justify-between cursor-pointer shadow-md">
                    <span>{unidad !== "" ? unidades.find((u) => u.valor === unidad)?.nombre : "Unidad"}</span>
                    <ListFilter className="" strokeWidth={1} size={16} />
                </ListboxButton>
                <ListboxOptions className="mt-2 w-35 bg-white rounded-md shadow-lg focus:outline-none" anchor="bottom">
                    {unidades.map((unidad) => (
                        <ListboxOption key={unidad.valor} value={unidad.valor} className={({ active, selected }) => `cursor-pointer px-4 py-2 text-sm ${active ? "bg-blue-100" : ""} ${selected ? "font-semibold" : ""}`}>
                            {unidad.nombre}
                        </ListboxOption>
                    ))}
                    <ListboxOption 
                        value=""
                        className={`px-4 py-2 w-full flex justify-between items-center text-sm font-bold border-t-2 text-white ${unidad === "" ? "bg-gray-400 cursor-default" : "bg-gray-700 cursor-pointer hover:bg-gray-500"}`}>
                            <span>
                                Limpiar
                            </span>
                            <RotateCcw strokeWidth={1.5} size={16} />
                    </ListboxOption>
                </ListboxOptions>
            </Listbox>

            <Listbox
                value={tipo}
                onChange={(value)=>{
                    setPage(1)
                    setTipo(value)
                }}>
                <ListboxButton className="bg-white py-2 px-3 text-sm w-45 rounded-lg flex items-center justify-between cursor-pointer shadow-md">
                    <span>{tipo !== "" ? tipos.find((t) => t.valor === tipo)?.nombre : "Tipo de material"}</span>
                    <ListFilter className="" strokeWidth={1} size={16} />
                </ListboxButton>
                <ListboxOptions className="mt-2 w-45 bg-white rounded-md shadow-lg focus:outline-none" anchor="bottom">
                    {tipos.map((tipo) => (
                        <ListboxOption key={tipo.valor} value={tipo.valor} className={({ active, selected }) => `cursor-pointer px-4 py-2 text-sm ${active ? "bg-blue-100" : ""} ${selected ? "font-semibold" : ""}`}>
                            {tipo.nombre}
                        </ListboxOption>
                    ))}
                    <ListboxOption 
                        value=""
                        className={`px-4 py-2 w-full flex justify-between items-center text-sm font-bold border-t-2 text-white ${tipo === "" ? "bg-gray-400 cursor-default" : "bg-gray-700 cursor-pointer hover:bg-gray-500"}`}>
                            <span>
                                Limpiar
                            </span>
                            <RotateCcw strokeWidth={1.5} size={16} />
                    </ListboxOption>
                </ListboxOptions>
            </Listbox>
        </div>
    );
};
