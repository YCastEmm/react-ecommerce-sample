type SearchBarProps = {
    setSearchTerm: (value: string) => void
    setPage: (value: number) => void
}

export const SearchBar = ({setSearchTerm, setPage}: SearchBarProps) => { 
    
    return  <input 
                className="bg-white w-100 py-2 px-3 rounded-lg shadow-md focus:outline-1 focus:outline-gray-400"
                placeholder="Buscar"
                onChange={(e) => {
                    setPage(1)
                    setSearchTerm(e.target.value)
                }}
                type="search" />
}