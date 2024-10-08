import { useContext } from "react"
import { TEEAuthDataContext } from "../context"

const useImagesLinkUrl = () => {
    const { edxAppConfig } = useContext(TEEAuthDataContext)

    const getAssetsUrl = () => {
        // if (edxAppConfig && edxAppConfig.app && edxAppConfig.app.baseImagesUrl)
        //     return edxAppConfig.app.baseImagesUrl

        // console.error("baseImagesUrl missing in config. You have to include the app.baseImagesUrl property")

        return ""
    }

    return {
        getAssetsUrl
    }
}

export default useImagesLinkUrl