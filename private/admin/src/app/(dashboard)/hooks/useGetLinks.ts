import { getLinks } from "@/services/links.services"
import { linksResponse } from "@/types/links.types"
import { useEffect, useState } from "react"


export const useGetLinks = (token: string) => { 

    const [links, setLinks] = useState<linksResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>(null)
    const [page, setPage] = useState<number>(1)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [unidad, setUnidad] = useState<string>("")
    const [tipo, setTipo] = useState<string>("")
    
    const PAGE_LIMIT = 35

    useEffect(()=>{
        
        const fetchLinks = async () =>{
            try {
                setLoading(true)
                const data = await getLinks(token, page, PAGE_LIMIT, searchTerm, unidad, tipo)
                setLinks(data)
        
            } catch (error) {
                setError(error)   
            } finally {
                setLoading(false)
            } 
        }

        fetchLinks()

    },[token, page, searchTerm, unidad, tipo])

    return {links, loading, error, setPage, page, setSearchTerm, unidad, tipo, setUnidad, setTipo}
}