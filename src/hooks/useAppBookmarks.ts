import { useContext, useEffect, useState } from 'react'
import { ExternalAppsContext, TEEAuthDataContext, UserProfileContext } from '../context'
import { ExternalAppData, Preference } from '../core'

interface UseAppBookmarksProps {

}

const bookmarkPreferenceCode = 'TEB'

const useAppBookmarks = (params?: UseAppBookmarksProps) => {
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext)
    const { userProfile, setUserProfile } = useContext(UserProfileContext)
    const { externalApps } = useContext(ExternalAppsContext)
    
    const [bookmarkedApps, setBookmarkedApps] = useState<ExternalAppData[]>([])
    const [appsList, setAppsList] = useState<ExternalAppData[]>([])

    const updateBookmarks = (bookmarkPreferenceObject: any | null, appId: string) => {
        if (bookmarkPreferenceObject) {
            const updatedPreferences = { ...bookmarkPreferenceObject  }
            updatedPreferences[appId] = !bookmarkPreferenceObject[appId]

            return updatedPreferences
        }

        const newBookmark = { [appId]: true }

        return newBookmark
    }

    const onAddBookmark = async (appId: string) => {

    }

    const selectBookmarked = (externalApps: ExternalAppData[], bookmarkedApps: any) => {
        const bookmarkedList = externalApps.filter(externalApp => bookmarkedApps[externalApp.applicationId])

        setBookmarkedApps(bookmarkedList)
    }

    const selectAppList = (externalApps: ExternalAppData[], bookmarkedApps: any) => {
        if (bookmarkedApps) {
            const list = externalApps.filter(externalApps => {
                if (bookmarkedApps[externalApps.applicationId])
                    return false

                return true
            })
    
            return list
        }

        return externalApps
    }

    const getBookmarkAppsPreferences = (preferences: Preference[]) => {
        const bookmarkPreferences = preferences.find(preference => preference.code === bookmarkPreferenceCode)

        if (bookmarkPreferences && bookmarkPreferences.value !== '') {
            const preferencesValue = JSON.parse(bookmarkPreferences.value)

            return preferencesValue
        }

        return null
    }     

    useEffect(() => {
        // if (userProfile && auth && auth.user) {
        //     const bookmarkPreferences = getBookmarkAppsPreferences(userProfile.preferences)

        //     if (bookmarkPreferences) {
        //         selectBookmarked(externalApps, bookmarkPreferences)
        //         const appList = selectAppList(externalApps, bookmarkPreferences)

        //         setAppsList(appList)
        //         return 
        //     }

        //     setAppsList(externalApps)
        // }
    }, [ auth, userProfile, externalApps ])

    return {
        appsList,
        bookmarkedApps,
        onAddBookmark
    }
}

export default useAppBookmarks