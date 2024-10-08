import { useContext } from "react"
import { TEEAuthDataContext } from "../context"

const useHelpLink = () => {
    const { edxAppConfig } = useContext(TEEAuthDataContext)

    const getAppName = () => {
        if (edxAppConfig) {
            const appSubtitle = edxAppConfig.app.subtitle
            const appNameSections = appSubtitle.split(" ").map(slice => slice.toLocaleLowerCase())
            const appName = appNameSections.length > 1? appNameSections.join("_") : appNameSections[0]

            if (appSubtitle === 'Acme Service Center')
                return 'Community'

            return appName
        }
    }

    const getHelpLink = () => {
        if (edxAppConfig && edxAppConfig.app.helpLinkUrl)
            return `${edxAppConfig.app.helpLinkUrl}#${getAppName()}`

        return ""
    }

    return {
        getHelpLink
    }
}

export default useHelpLink