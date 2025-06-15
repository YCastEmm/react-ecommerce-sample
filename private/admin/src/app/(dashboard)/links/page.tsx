"use client"
import { LinksTable } from "@/components/links/LinksTable";
import { useGetLinks } from "../hooks/useGetLinks";
import { useAuthContext } from "@/contexts/useAuthContext";
import { LoadingTable } from "@/components/loading/LoadingTable";
import { SearchBar } from "@/components/SearchBar";
import { PageNavigator } from "@/components/PageNavigator";
import { FilterBar } from "@/components/FilterBar";
import NoResults from "@/components/NoResults";


const LinksPage =  () => {

    const { auth } = useAuthContext();
    const token = auth?.token

    const {links, loading, error, setPage, setSearchTerm, setTipo, setUnidad, unidad, tipo} = useGetLinks(token || "")
    
    const productos = links?.data?.productos ?? [];

    return (
        <section className="flex flex-col h-[calc(100vh-32px)]">
            <p className="text-sm text-gray-500">Administrador de material técnico | Dashboard | Listado de links</p>            
            <div className="flex items-center justify-between mb-2">
                <SearchBar setSearchTerm={setSearchTerm} setPage={setPage}/>
                <FilterBar setTipo={setTipo} setUnidad={setUnidad} unidad={unidad} tipo={tipo} setPage={setPage}/>
                {links && <PageNavigator setPage={setPage} links={links} />}
            </div>
            <div className="flex-1 overflow-y-auto mb-2 rounded-lg">
            {error ? (
                <p>Ocurrió un error al cargar los links</p>
            ) : loading ? (
                <LoadingTable />
            ) : productos.length === 0 ? (
                <NoResults />
            ) : (
                links ? <LinksTable response={links}></LinksTable> : <p>Cargando</p>
            )}
            </div>

        </section>
    );
};

export default LinksPage;
