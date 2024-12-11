import axiosClass, { AxiosError } from "axios"
import { useAuth } from 'react-oidc-context'
import { useConfig } from '../context'
import { HttpServiceRequestError, HttpServiceResponse } from './HttpService/HttpService.response.types'
import { HttpServiceGetRequest, HttpServiceMethod, HttpServicePostRequest, HttpServicePutRequest } from './HttpService/HttpService.types'


export const useApiService = (_baseURL: string | undefined) => {
  const {user} = useAuth()
  const { config } = useConfig()
  const baseURL = _baseURL ?? config.api.edfiAdminApiBaseUri

  function addTenantHeader(headers: Record<string, string>): Record<string, string> {
    if(!config.app.multiTenancy) {
      return headers
    }
    
    const tenantId = sessionStorage.getItem('selectedTenant')
    return {
      ...headers,
      'Tenant': tenantId || ''
    }
  }

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

  const axiosInstance = axiosClass.create({
    baseURL,
    headers: addTenantHeader({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + (user?.access_token ?? '')
    }),
  })

  async function get<TResponse>({ url, actionName }: HttpServiceGetRequest) {
    console.log(`Get request ${actionName} to ${url}`)

    try {
      const res = await axiosInstance.get(url)

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
  }

  async function post<TResponse, TData>({ url, data, actionName }: HttpServicePostRequest<TData>) {
    console.log(`Post request ${actionName} to ${url}`)

    try {
      const res = await axiosInstance.post(url, data)

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
  }

  async function put<TResponse, TData>({ url, data, actionName }: HttpServicePutRequest<TData>) {
    console.log(`Put request ${actionName} to ${url}`)

    try {
      const res = await axiosInstance.put(url, data)

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

  return {
    api: axiosInstance,
    handleAxiosError,
    createDefaultError,
    get,
    post,
    put
  }
}