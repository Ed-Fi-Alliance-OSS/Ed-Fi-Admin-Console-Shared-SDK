import { useContext, useState, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import { Preference, UserProfile } from '../core'
import { fetchUserProfile } from '../services'
import useDecodeToken from './useDecodeToken'
import { TEEAuthDataContext } from "../context"

interface UseUserProfileProps {
    apiUrl: string
}

const useUserProfile = ({ apiUrl }: UseUserProfileProps) => {
    const auth = useAuth()
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
    const [ loadingProfile, setLoadingProfile ] = useState(true)
    const { decodeTokenPayload } = useDecodeToken()
    const { edxAppConfig } = useContext(TEEAuthDataContext)

    const fetchProfile = async () => {
        if (auth.user) {
            try {
                const token = auth.user.access_token

                setLoadingProfile(true)
                const result = await fetchUserProfile(token, apiUrl, edxAppConfig?.api)
                setLoadingProfile(false)

                if (result.type === 'Response') {
                    const preferences: Preference[] = result.data.preferences
                    const tenantPref = preferences.find(preference => preference.code === "selectedtenantid")

                    const tokenPayload = decodeTokenPayload(auth.user.access_token)
                    const payloadTenantId = tokenPayload.tenantid

                    console.log('tenantid pref', tenantPref?.value)
                    console.log('tenantid token', payloadTenantId)

                    if (tenantPref && payloadTenantId != tenantPref.value) {
                        console.log('Signin redirect', payloadTenantId)
                        return await auth.signinRedirect()
                    }
    
                    setUserProfile({...result.data, tenantId: tenantPref? tenantPref.value : "" })
                }
                else {
                    if (!window.location.pathname.includes("unauthorized")) {
                        const origin = window.location.origin
                        const pathnameParts = window.location.pathname.split("/")
                        const baseApplicationUri = pathnameParts[1]
                        const destinationUrl = `${origin}/${baseApplicationUri}/unauthorized`

                        window.location.replace(destinationUrl)
                    }
                }
            }
            catch(ex) {
                console.error('Unexpected error when fetching userProfile')
            }
        }
    }

    useEffect(() => {
        if (auth.user && !auth.isLoading && auth.isAuthenticated)
            fetchProfile()
    }, [auth])

    return {
        loadingProfile,
        userProfile,
        setUserProfile
    }
}

export default useUserProfile