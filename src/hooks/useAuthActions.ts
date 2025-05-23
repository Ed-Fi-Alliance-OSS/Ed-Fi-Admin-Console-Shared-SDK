import { useContext } from "react"
import { TEEAuthDataContext, UserProfileContext } from "../context"

interface UseTeeAuthDataProps {
    
}

const useAuthActions = (params?: UseTeeAuthDataProps) => {
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    const handleLogOut = async () => {
        if (auth) await auth.signoutRedirect()
    }

    const handleLogIn = async () => {
        if (auth) await auth.signinRedirect()
    }

    const handleChangeTenantId = async (tenantId: string) => {
        // if (userProfile && auth && auth.user) {
        //     const newUserProfile = {...userProfile}
        //     newUserProfile.tenantId = tenantId

        //     const result = await updateTenantIdPreference
        //     (
        //         auth.user.access_token,
        //         tenantId,
        //         (edxAppConfig? edxAppConfig.api.edfiApiBaseUri ?? '' : '' ),
        //         edxAppConfig?.api
        //     )

        //     if (result) await auth.signinRedirect()
        // }
    }

    return {
        handleLogIn, 
        handleLogOut,
        handleChangeTenantId
    }
}

export default useAuthActions