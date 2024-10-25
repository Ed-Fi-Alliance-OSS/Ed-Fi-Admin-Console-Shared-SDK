import { useContext, useEffect, useState } from 'react'
import { useAuth } from 'react-oidc-context'
import { ExternalAppData, UserProfile } from '../core'
import { fetchUserApps } from '../services/AppsService/AppsService'
import { TEEAuthDataContext } from "../context"

interface UseUserAppListProps {
    userProfile: UserProfile | null
    apiUrl: string
}

const useUserAppList = ({ userProfile, apiUrl }: UseUserAppListProps) => {
    const auth = useAuth()
    const { edxAppConfig } = useContext(TEEAuthDataContext)
    const [ externalApps, setExternalApps ] = useState<ExternalAppData[]>([])
    const [ loadingExternalApps, setLoadingExternalApps ] = useState(false)
    const [ fetchedExternalApps, setFetchedExternalApps ] = useState(false)

    const fetchExternalApps = async (token: string, tenantId: string) => {
        setLoadingExternalApps(true)
        const result = await fetchUserApps(token, tenantId, apiUrl, edxAppConfig?.api)

        setLoadingExternalApps(false)
        setFetchedExternalApps(true)

        if (result.type === 'Response') {
            const externalApps: ExternalAppData[] = result.data

            console.log('external apps in fetchExternal apps', externalApps)
    
            if (externalApps.length > 0) {
                externalApps.forEach(appData => {
                    appData.applicationUri = appData.applicationUri.replace(".edgraph.",".txedexchange.");
                });
            }
    
            if (externalApps.length > 0) {
                const appsAvailable = externalApps
                    .filter(app => app.isTenantSubscribed)
                    .sort((a, b) => a.applicationName.localeCompare(b.applicationName))
    
                // console.log('available apps', appsAvailable)
                
                return setExternalApps(appsAvailable)
            }
    
            setExternalApps(externalApps)
        }
    }

    useEffect(() => {
        if (auth.user && userProfile) {
            console.log('use effect appList auth.user and userprofile received')
            const accessPref = userProfile.preferences.find(pref => pref.code === 'selectedtenantid')

            console.log('access pref', accessPref)
            
            if (accessPref)
                fetchExternalApps(auth.user.access_token,accessPref.value)
        }
    }, [ auth, userProfile ])

    return {
        loadingExternalApps,
        fetchedExternalApps,
        externalApps,
        setExternalApps
    }
}

export default useUserAppList