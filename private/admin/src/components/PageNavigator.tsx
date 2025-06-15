import { linksResponse } from "@/types/links.types"


type PageNavigatorProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
    links: linksResponse 
}

export const PageNavigator = ({setPage, links}: PageNavigatorProps) => { 

    const currentPage = links.data.page
    const totalPages = links.data.totalPages

    const segundoBtn = totalPages > 1 ? currentPage < 5 || totalPages <= 7 ? 2 : "..." : " "
    const tercerBtn = currentPage < 5 || totalPages <= 7 ? 3 : currentPage > totalPages - 4 ? totalPages - 4 : currentPage - 1
    const cuartoBtn = currentPage < 5 || totalPages <= 7 ? 4 : currentPage > totalPages - 4 ? totalPages - 3 : currentPage
    const quintoBtn = currentPage < 5 || totalPages <= 7 ? 5 : currentPage > totalPages - 4 ? totalPages - 2 : currentPage + 1
    const sextoBtn = totalPages > 5 ? totalPages <= 7 ? 6 : currentPage > totalPages - 4 ? totalPages - 1 : "..." : " "
    const septimoBtn = totalPages > 6 ? totalPages : " "

    return  <section className="sticky bottom-0 w-130 bg-white shadow-md rounded-lg">
                <div className="flex justify-around p-2">
                
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="min-w-[90px] text-black text-sm px-2 hover:font-bold hover:cursor-pointer disabled:text-gray-400 disabled:hover:font-normal disabled:cursor-default">Anterior</button>
                    <div className="flex justify-around w-300">

                        {/* 1er boton */}
                        <button
                            onClick={() => setPage(1)}
                            className={`paginationButton ${currentPage === 1 ? "paginationButtonActive" : ""}`}
                            >
                            1
                        </button>

                        {/* 2do boton */}                       
                        <button
                            onClick={() => setPage(2)}
                            disabled={currentPage > 4 && !(totalPages <= 7) || totalPages < 2}
                            className={`paginationButton ${currentPage === 2 ? "paginationButtonActive" : ""}`}
                            >
                            { segundoBtn }    
                        </button>
                        

                        {/* 3er boton */}
                        <button
                            onClick={() => totalPages > 3 && setPage(tercerBtn)}
                            disabled={totalPages < 3}
                            className={`paginationButton ${currentPage === tercerBtn ? "paginationButtonActive" : ""}`}
                            >
                            { totalPages > 2 ? tercerBtn : " " }    
                        </button>

                        {/* 4to boton */}
                        <button
                            onClick={() => setPage(cuartoBtn)}
                            disabled={totalPages < 4}
                            className={`paginationButton ${currentPage === cuartoBtn ? "paginationButtonActive" : ""}`}
                            >
                            { totalPages > 3 ? cuartoBtn : " " }    
                        </button>

                        {/* 5to boton */}
                        <button
                            onClick={() => setPage(quintoBtn)}
                            disabled={totalPages < 5}
                            className={`paginationButton ${currentPage === quintoBtn ? "paginationButtonActive" : ""}`}
                            >
                            { totalPages > 4 ? quintoBtn : " " }    
                        </button>

                        {/* 6to boton */}
                        <button
                            onClick={() => totalPages < 7 ? setPage(totalPages) : setPage(totalPages - 1)}
                            disabled={currentPage < totalPages - 3 && !(totalPages <= 7)}
                            className={`paginationButton ${currentPage === sextoBtn ? "paginationButtonActive" : ""}`}
                            >
                            { sextoBtn }    
                        </button>

                        {/* 7mo boton */}
                        <button
                            onClick={() => setPage(totalPages)}
                            disabled={ totalPages < 7}
                            className={`paginationButton ${totalPages > 6 && currentPage === septimoBtn ? "paginationButtonActive" : ""}`}
                            >
                            { septimoBtn }    
                        </button>
                    </div>
                    
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                        className="min-w-[90px] text-black text-sm px-2 hover:font-bold hover:cursor-pointer disabled:text-gray-400 disabled:hover:font-normal disabled:cursor-default">
                            Siguiente
                    </button>
                </div>
            </section>
}