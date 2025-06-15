import { deleteLink } from "@/services/links.services";
import { errorResponseType } from "@/types/response.types";
import { useState } from "react";

export const useDelete = () => {
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
    const [deleteError, setDeleteError] = useState<errorResponseType | null>(null);

    const deleteLinkById = async (token: string, id: string) => {
        try {
            setLoadingDelete(true);
            setDeleteError(null)
            await deleteLink(token, id);
        } catch (error) {
            if (error instanceof Error) {
                setDeleteError({ errorMessage: error.message });
            } else {
                setDeleteError({ errorMessage: "Ocurrió un error desconocido." });
            }
        } finally {
            setLoadingDelete(false);
        }
    };

    return { loadingDelete, deleteError, deleteLinkById };
};
