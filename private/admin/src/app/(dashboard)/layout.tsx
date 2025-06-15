"use client";
import PopupMessage from "@/components/popup/popup";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useNotificationContext } from "@/contexts/useNotificationContext";
import { List, LogOut, Upload } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const router = useRouter();
    const pathName = usePathname()
    const { logout, isAuthenticated, auth, isLoading } = useAuthContext();
    const { showNotification } = useNotificationContext()
    

    useEffect(() => {
        if (!isLoading && !isAuthenticated) { // isLoading es true mientras se leen los datos del localStorage
            router.push("/");
        }
    }, [isAuthenticated, router, isLoading]);
    
    const activeLink = pathName === "/links" ? "links" : "uploadLink"   
    
    return (
            auth?.user ? (
            
            <section className="grid grid-cols-16 h-screen">
                <div className="col-span-2 bg-blue-700 flex flex-col justify-between items-center p-3 text-white">
                    <div>
                        <div className="mb-8 mt-2">
                            <h3>Bienvenido {auth?.user.userName}</h3>
                        </div>
                        <div className="flex flex-col">                        
                            <Link
                                className={`my-2 text-lg hover:bg-blue-200 px-4 py-2 rounded-2xl hover:text-black ${activeLink === "links" && "bg-gray-100 text-black"}`}
                                href={"/links"}>
                                    <div className="flex items-center justify-start gap-4">
                                        <List strokeWidth={1.5} />
                                        <span>Listado de links</span>
                                    </div>
                            </Link>
                            
                            <Link
                                className={`my-2 text-lg hover:bg-blue-200 px-4 py-2 rounded-2xl hover:text-black ${activeLink === "uploadLink" && "bg-gray-100 text-black"}`}
                                href={"/uploadLinks"}>
                                    <div className="flex items-center justify-start gap-4">
                                        <Upload strokeWidth={1.5}/>
                                        <span>Cargar links</span>
                                    </div>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-5">
                        <button onClick={logout} className="text-white cursor-pointer border-b-1 border-transparent p-1 hover:border-b-white inline">
                            Cerrar sesión
                            <LogOut className="inline ml-2" strokeWidth={2} height={16} />
                        </button>
                    </div>
                </div>

                <div className="col-span-14 bg-slate-200 p-4 overflow-auto">
                    {children}
                </div>
                { showNotification && <PopupMessage />}

            </section> )
            
            : <p>Cargando</p>
    );
}
