import axios, { AxiosError } from "axios"
import { HttpServiceRequestError, HttpServiceResponse } from "./HttpService.response.types"
import { HttpService, HttpServiceGetRequest, HttpServiceMethod, HttpServicePostRequest, HttpServicePutRequest } from "./HttpService.types"
import { includeAuthorization } from "../../utils/AuthenticationToken"

axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

const createDefaultError = (method: HttpServiceMethod, actionName: string) => {
    const actionMessage = `Error for ${method}: ${actionName}`
    
    const requestError: HttpServiceRequestError = {
        message: actionMessage,
        actionMessage: `Failed to ${actionName}.`,
        statusCode: 'unknown',
        action: actionName,
        type: 'Error'
    }

    return { actionMessage, requestError }
}

const handleAxiosError = (error: AxiosError, requestError: HttpServiceRequestError) => {
    console.error(`${error.message}`, error)
    
    requestError.actionMessage = `${requestError.actionMessage} ${error.response?.status}`
    requestError.statusCode = error.response?.status ?? 'unknown'

    return requestError
}

const httpService: HttpService = {
    async get<TResponse>({ url, access_token, actionName, apiConfig }: HttpServiceGetRequest) {
        console.log(`Get request ${actionName} to ${url}`)

        try {
            const authenticationHeader = await includeAuthorization(access_token, apiConfig);
            const res = await axios.get(url, authenticationHeader     )
        
            const response: HttpServiceResponse<TResponse> = {
                data: res.data,
                type: 'Response'
            }
    
            return response
        }
        catch (error) {
            const { requestError, actionMessage } = createDefaultError('Get', actionName)
    
            if (error instanceof AxiosError) {
               return handleAxiosError(error, requestError)
            } else {
                console.log('error')
                console.error(`${actionMessage}`, error)
    
                return requestError
            }
        }
    },
    async post<TResponse, TData>({ url, access_token, data, actionName, apiConfig }: HttpServicePostRequest<TData>) {
        console.log(`Post request ${actionName} to ${url}`)

        try {
            const authenticationHeader = await includeAuthorization(access_token, apiConfig);
            const res = await axios.post(url, data, authenticationHeader);
        
            const response: HttpServiceResponse<TResponse> = {
                data: res.data,
                type: 'Response'
            }
    
            return response
        }
        catch (error) {
            const { actionMessage, requestError } = createDefaultError('Post', actionName)
    
            if (error instanceof AxiosError) {
                return handleAxiosError(error, requestError)
            } else {
                console.error(`${actionMessage}`, error)
    
                return requestError
            }
        }
    },
    async put<TResponse, TData>({ url, access_token, data, actionName, apiConfig }: HttpServicePutRequest<TData>) {
        console.log(`Put request ${actionName} to ${url}`)

        try {
            const authenticationHeader = await includeAuthorization(access_token, apiConfig);
            const res = await axios.put(url, data, authenticationHeader);
        
            const response: HttpServiceResponse<TResponse> = {
                data: res.data,
                type: 'Response'
            }
    
            return response
        }
        catch (error) {
            const { actionMessage, requestError } = createDefaultError('Put', actionName)
    
            if (error instanceof AxiosError) {
                return handleAxiosError(error, requestError)
            } else {
                console.error(`${actionMessage}`, error)
    
                return requestError
            }
        }
    }
}

export default httpService