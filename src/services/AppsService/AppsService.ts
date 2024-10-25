import axios, { AxiosError } from "axios"
import { ExternalAppData } from "../../core"
import httpService from "../HttpService/HttpService"
import { HttpServiceResponse } from "../HttpService/HttpService.response.types"
import { GetApplicationsListResult } from "./AppsService.result"
import { Api } from "../../core/EdxApp.types"

interface WrappedExternalAppData {
    data: ExternalAppData[]
}

const fetchUserApps = async (token: string, tenantId: string, apiUrl: string, apiConfig?: Api) : GetApplicationsListResult => {
    const appsListUrl = `${apiUrl}/tenants`
    const appEndpoint = 'applicationtiles'

    const url = `${appsListUrl}/${tenantId}/${appEndpoint}`

    const result = await httpService.get<WrappedExternalAppData>({
        url,
        actionName: 'Get Applications List',
        access_token: token,
        apiConfig
    })

    if (result.type === 'Response') {
        const unwrappedData: HttpServiceResponse<ExternalAppData[]> = {
            data: result.data.data,
            type: 'Response'
        }

        return unwrappedData
    }

    return result
}

const addBookmark = async (token: string, bookmarks: any, apiUrl: string) => {
    const addBookmarkUrl = `${apiUrl}/me/preferences`
    const valueString = JSON.stringify(bookmarks)

    const data = { code: 'TEB', value: valueString }

    try {
        await axios.post(addBookmarkUrl, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }, 
        })

        return true
    }
    catch(ex) {
        if (ex instanceof AxiosError) {
            console.error("Error", ex.message)
            return false
        }
    }
}

export {
    fetchUserApps,
    addBookmark
}