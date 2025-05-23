import { createContext } from 'react'
import { EdxAppConfig } from '../core/EdxApp.types'
import { AuthProvider } from 'react-oidc-context'
import { createEdxAppConfig } from '../helpers'
import { TEEAuthDataContextProvider } from './TEEAuthDataContext'

interface ITEEAuthContext {
    edxAppConfig: EdxAppConfig | null
}

export const TEEAuthContext = createContext<ITEEAuthContext>({
    edxAppConfig: null
})

interface TEEAuthContextProviderProps {
    children: JSX.Element
    edxAppConfig: EdxAppConfig
}

export const TEEAuthContextProvider = ({ children, edxAppConfig }: TEEAuthContextProviderProps) => {
    const oidcEdxAppConfig = createEdxAppConfig(edxAppConfig)

    return (
        <AuthProvider {...oidcEdxAppConfig}>
            <TEEAuthDataContextProvider edxAppConfig={edxAppConfig}>
                {children}
            </TEEAuthDataContextProvider>
        </AuthProvider>
    )
}
