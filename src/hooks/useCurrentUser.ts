import { useContext, useEffect, useState } from "react"
import { TEEAuthDataContext, UserProfileContext } from "../context"
import { TenantUser } from "../core/User.types"
import { getUser } from "../services/ProfileService/ProfileService"

const useCurrentUser = () => {
    const { userProfile } = useContext(UserProfileContext)
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext)
    const [currentUser, setCurrentUser] = useState<TenantUser | null>(null)

    const fetchCurrentUserByEmail = async () => {
        if (!auth || !auth.user || !userProfile || !edxAppConfig)
            return 

        const token = auth.user.access_token
            const apiUrl = edxAppConfig.api.edfiApiBaseUri as string
            const tenantId = userProfile.tenantId
    
            const getUserResult = await getUser(
                token,
                apiUrl,
                tenantId,
                userProfile.email,
                edxAppConfig?.api
            )

        if (getUserResult.type == 'Error')
            return console.log('error when trying to fetch user by email')

        if (getUserResult.data.data.length > 0)
            setCurrentUser(getUserResult.data.data[0])
    }

    useEffect(() => {
        fetchCurrentUserByEmail()
    }, [])

    return {
        currentUser
    }
}

export default useCurrentUser