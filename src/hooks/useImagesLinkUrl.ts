import { useConfig } from "../context"

const useImagesLinkUrl = () => {
    const { config }= useConfig()

    const getAssetsUrl = () => {
        return `${config.app.basePath}/assets`
    }

    return {
        getAssetsUrl
    }
}

export default useImagesLinkUrl