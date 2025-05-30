import { useEffect, useState } from 'react'
import { useAuth } from 'react-oidc-context'
import { useConfig } from "../context"
import { UserProfile } from '../core'
import useDecodeToken from './useDecodeToken'

interface UseUserProfileProps {

}

const useUserProfile = ({  }: UseUserProfileProps) => {
    const auth = useAuth()
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
    const [ loadingProfile, setLoadingProfile ] = useState(true)
    const { decodeTokenPayload } = useDecodeToken()
    const { config } = useConfig()

    const fetchProfile = async () => {
        if (auth.user) {
            try {
                const token = auth.user.access_token
                if(!config) {
                  console.error("No Config found")
                  return
                }
                setLoadingProfile(true)
                // const tempProfileUrl = `${config?.app.basePath}/mockdata/data-userprofile.json`
                // const result = await fetchUserProfile(token, tempProfileUrl, config?.api)
                // console.log('fetchProfile', result)
                // setLoadingProfile(false)

                // if (result.type === 'Response') {
                    // const preferences: Preference[] = result.data.preferences
                    // const tenantPref = preferences.find(preference => preference.code === "selectedtenantid")

                    const tokenPayload = decodeTokenPayload(auth.user.access_token)
                    const payloadTenantId = tokenPayload.tenantid

                    // console.log('tenantid pref', tenantPref?.value)


                    // if (tenantPref && payloadTenantId != tenantPref.value) {
                    //     console.log('Signin redirect', payloadTenantId)
                    //     return await auth.signinRedirect()
                    // }

                    setUserProfile({
                      firstName: tokenPayload?.given_name ?? '',
                      lastName: tokenPayload?.family_name ?? '',
                      email: tokenPayload?.email ?? '',
                      userName: tokenPayload?.email ?? ''
                    })
                // }
                // else {
                    // if (!window.location.pathname.includes("unauthorized")) {
                    //     const origin = window.location.origin
                    //     const pathnameParts = window.location.pathname.split("/")
                    //     // const baseApplicationUri = pathnameParts[1]
                    //     // const destinationUrl = `${origin}/${baseApplicationUri}/unauthorized`
                    //     const destinationUrl = `${config.auth.redirectUri.replace('/callback', '')}/unauthorized`

                    //     window.location.replace(destinationUrl)
                    // }
                // }
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
