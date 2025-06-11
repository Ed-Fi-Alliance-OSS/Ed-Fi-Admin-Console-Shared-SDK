import { createContext } from "react";
import { EdxAppConfig } from "../core/EdxApp.types";
import { TEEAuthDataContextProvider } from "./TEEAuthDataContext";

interface ITEEAuthContext {
    edxAppConfig: EdxAppConfig | null;
}

export const TEEAuthContext = createContext<ITEEAuthContext>({
    edxAppConfig: null,
});

interface TEEAuthContextProviderProps {
    children: JSX.Element;
    edxAppConfig: EdxAppConfig;
}

export const TEEAuthContextProvider = ({ children, edxAppConfig }: TEEAuthContextProviderProps) => {
    return (
        <TEEAuthDataContextProvider edxAppConfig={edxAppConfig}>
            {children}
        </TEEAuthDataContextProvider>
    );
};
