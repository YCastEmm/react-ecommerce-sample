import { postLink } from "@/services/links.services";
import { linkType } from "@/types/links.types";
import { errorResponseType } from "@/types/response.types";
import { useState } from "react";

export const usePostLink = () => {
    const [linkData, setLinkData] = useState<linkType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<errorResponseType | null>(null);

    const createLink = async (token: string, link: linkType) => {
        setLoading(true);
        setError(null)
        
        try {
            const data = await postLink(token, link);
            setLinkData(data);
        } catch (error) {
            setLinkData(null);

            const errorMessage = error instanceof Error
                ? error.message // si es un Error, accedo al mensaje del error
                : "Ocurrió un error desconocido."; // si no, muestro un mensaje genérico

            setError({ errorMessage }) // seteo el mensaje de error para retornarlo
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { linkData, loading, error, createLink };
};
