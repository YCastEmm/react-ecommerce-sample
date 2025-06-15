import { linkType } from "@/types/links.types";


export const getLinks = async () =>{
    const response = await fetch(`http://localhost:3000/api/products`)


    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("role");
            window.location.href = "/"
            return // para evitar que siga ejecutando
        }
        const {errorMessage} = await response.json()
        throw new Error(`Error: ${errorMessage}`);
    }

    const data = await response.json()
    return data
}


export const postLink = async (token: string, link: linkType) =>{
    const response = await fetch("https://us-central1-staging-manualesx-28-1e29c.cloudfunctions.net/api/links", {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(link)
        })

    if (!response.ok) {
        const {errorMessage} = await response.json()
        throw new Error(`Error: ${errorMessage}`);
    }

    const data = await response.json()

    return data
}

export const putLink = async (token: string, id: string, link: linkType) =>{
    const response = await fetch(`https://us-central1-staging-manualesx-28-1e29c.cloudfunctions.net/api/links/${id}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(link)
        })

    console.log(JSON.stringify(link));
    
    
    if (!response.ok) {
        const {errorMessage} = await response.json()
        throw new Error(`Error: ${errorMessage}`);
    }
    const data = await response.json()
    return data
}


export const deleteLink = async (token: string, id: string) =>{
    const response = await fetch(`https://us-central1-staging-manualesx-28-1e29c.cloudfunctions.net/api/links/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        }})

    if (!response.ok) {
        const {errorMessage} = await response.json()
        throw new Error(`Error: ${errorMessage}`);
    }

    const data = await response.json()
    return data
}