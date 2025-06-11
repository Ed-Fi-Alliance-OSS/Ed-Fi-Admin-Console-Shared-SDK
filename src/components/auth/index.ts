import { useContext } from "react";
import { TEEAuthDataContext } from "../../context/TEEAuthDataContext";
import { AuthContextProps, User } from "../../core/Authentication.types";

export type {
    AuthContextProps,
    User,
};

// Define and export the useAuth method
export const useAuth = () => {
    const { auth } = useContext(TEEAuthDataContext);
    return auth;
};
