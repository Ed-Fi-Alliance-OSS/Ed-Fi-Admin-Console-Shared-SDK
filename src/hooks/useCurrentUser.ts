import { useContext, useEffect, useState } from "react"
import { TEEAuthDataContext, UserProfileContext } from "../context"
import { TenantUser } from "../core/User.types"
import { getTenantUser } from "../services/ProfileService/ProfileService"
import useAuthActions from "../hooks/useAuthActions" // Import getUser function

const useCurrentUser = () => {
    const { userProfile } = useContext(UserProfileContext)
    const { edxAppConfig } = useContext(TEEAuthDataContext)
    const [currentUser, setCurrentUser] = useState<TenantUser | null>(null)
    const { getUser } = useAuthActions() // Use getUser from useAuthActions
    const fetchCurrentUserByEmail = async () => {
        const user = await getUser();

        if (!user) return false;
        if (!userProfile || !edxAppConfig)
            return;

        const token = user.access_token;
            const apiUrl = edxAppConfig.api.edfiApiBaseUri as string

            const getUserResult = await getTenantUser(
                token,
                apiUrl,
                '1',
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
