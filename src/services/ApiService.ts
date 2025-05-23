import axiosClass, { AxiosError, AxiosInstance } from "axios"
import { useConfig } from "../context";
import { HttpServiceRequestError, HttpServiceResponse } from "./HttpService/HttpService.response.types";
import { HttpServiceGetRequest, HttpServiceMethod, HttpServicePostRequest, HttpServicePutRequest } from "./HttpService/HttpService.types";
import useAuthActions from "../hooks/useAuthActions"; // Import useAuthActions
import { User } from "../core/Authentication.types"; // Import the User type

export const useApiService = (_baseURL: string | undefined) => {
  const { getUser } = useAuthActions(); // Use getUser from useAuthActions
  const { config } = useConfig();
  const baseURL = _baseURL ?? config.api.edfiAdminApiBaseUri;

  function addTenantHeader(headers: Record<string, string>): Record<string, string> {
    if (!config.app.multiTenancy) {
      return headers;
    }

    const tenantId = sessionStorage.getItem("selectedTenant");
    return {
      ...headers,
      Tenant: tenantId || "",
    };
  }

  const createAxiosInstance = async (): Promise<AxiosInstance> => {
    const user = await getUser(); // Retrieve the user object asynchronously
    return axiosClass.create({
      baseURL,
      headers: addTenantHeader({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user?.access_token ?? ""}`, // Use the access token from the user object
      }),
    });
  };

  const createDefaultError = (method: HttpServiceMethod, actionName: string) => {
    const actionMessage = `Error for ${method}: ${actionName}`;

    const requestError: HttpServiceRequestError = {
      message: actionMessage,
      actionMessage: `Failed to ${actionName}.`,
      statusCode: "unknown",
      action: actionName,
      type: "Error",
    };

    return { actionMessage, requestError };
  };

  const handleAxiosError = (error: AxiosError, requestError: HttpServiceRequestError) => {
    console.error(`${error.message}`, error);

    requestError.actionMessage = `${requestError.actionMessage} ${error.response?.status}`;
    requestError.statusCode = error.response?.status ?? "unknown";

    return requestError;
  };

  async function get<TResponse>({ url, actionName }: HttpServiceGetRequest) {
    console.log(`Get request ${actionName} to ${url}`);

    try {
      const axiosInstance = await createAxiosInstance(); // Lazily create the Axios instance
      const res = await axiosInstance.get(url);

      const response: HttpServiceResponse<TResponse> = {
        data: res.data,
        type: "Response",
      };

      return response;
    } catch (error) {
      const { requestError, actionMessage } = createDefaultError("Get", actionName);

      if (error instanceof AxiosError) {
        return handleAxiosError(error, requestError);
      } else {
        console.error(`${actionMessage}`, error);

        return requestError;
      }
    }
  }

  async function post<TResponse, TData>({ url, data, actionName }: HttpServicePostRequest<TData>) {
    console.log(`Post request ${actionName} to ${url}`);

    try {
      const axiosInstance = await createAxiosInstance(); // Lazily create the Axios instance
      const res = await axiosInstance.post(url, data);

      const response: HttpServiceResponse<TResponse> = {
        data: res.data,
        type: "Response",
      };

      return response;
    } catch (error) {
      const { actionMessage, requestError } = createDefaultError("Post", actionName);

      if (error instanceof AxiosError) {
        return handleAxiosError(error, requestError);
      } else {
        console.error(`${actionMessage}`, error);

        return requestError;
      }
    }
  }

  async function put<TResponse, TData>({ url, data, actionName }: HttpServicePutRequest<TData>) {
    console.log(`Put request ${actionName} to ${url}`);

    try {
      const axiosInstance = await createAxiosInstance(); // Lazily create the Axios instance
      const res = await axiosInstance.put(url, data);

      const response: HttpServiceResponse<TResponse> = {
        data: res.data,
        type: "Response",
      };

      return response;
    } catch (error) {
      const { actionMessage, requestError } = createDefaultError("Put", actionName);

      if (error instanceof AxiosError) {
        return handleAxiosError(error, requestError);
      } else {
        console.error(`${actionMessage}`, error);

        return requestError;
      }
    }
  }

  return {
    handleAxiosError,
    createDefaultError,
    get,
    post,
    put,
  };
};
