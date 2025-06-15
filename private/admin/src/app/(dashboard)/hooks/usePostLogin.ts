import { postLogin } from "@/services/auth.services";
import { authResponseType } from "@/types/response.types";
import { errorResponseType } from "@/types/response.types";
import { userLoginCredentialsType } from "@/types/auth.types";
import { useState } from "react";

export const usePostLogin = () => {
    const [userData, setUserData] = useState<authResponseType | null>();
    const [loading, setLoading] = useState<boolean | null>();
    const [error, setError] = useState<errorResponseType | null>(null);

    const fetchLogin = async (user: userLoginCredentialsType) => {
        try {
            setLoading(true);
            setError(null)
            const data = await postLogin(user);
            setUserData(data);
        } catch (error) {
            const errorTyped = error as errorResponseType;
            setUserData(null);
            setError(errorTyped);
        } finally {
            setLoading(false);
        }
    };

    return { userData, loading, error, fetchLogin };
};
