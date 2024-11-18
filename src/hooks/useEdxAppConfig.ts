import { EdxAppConfig } from "../core"

interface UseAppConfigProps {
    edxAppConfig: EdxAppConfig | null
}

const useEdxAppConfig = ({ edxAppConfig }: UseAppConfigProps) => {
    const getApiUrl = () => {
        if (edxAppConfig) return edxAppConfig.api.edfiApiBaseUri

        return ''
    }

    const getAppName = () => {
        if (edxAppConfig) return edxAppConfig.app.subtitle

        return ''
    }

    return {
        getApiUrl,
        getAppName
    }
}

export default useEdxAppConfig