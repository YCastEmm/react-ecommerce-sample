import { putLink } from "@/services/links.services";
import { linkType } from "@/types/links.types";
import { errorResponseType } from "@/types/response.types";
import { useState } from "react";

export const usePutLink = () => {
    const [linkData, setLinkData] = useState<linkType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<errorResponseType | null>(null);

    const updateLink = async (token: string, id: string, link: linkType) => {
        try {
            setLoading(true);
            setError(null)
            const data = await putLink(token, id, link);
            setLinkData(data);
        } catch (error) {
            setLinkData(null);
            if (error instanceof Error) {
                setError({ errorMessage: error.message });
            } else {
                setError({ errorMessage: "Ocurrió un error desconocido." });
            }
        } finally {
            setLoading(false);
        }
    };

    return { linkData, loading, error, updateLink };
};
